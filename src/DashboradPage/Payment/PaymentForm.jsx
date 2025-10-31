import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useParams } from "react-router";
import useAxiosBaseUrl from "../../Hooks/useAxiosBaseUrl";
import { useQuery } from "@tanstack/react-query";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#1E293B",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#94A3B8",
      },
    },
    invalid: {
      color: "#EF4444",
      iconColor: "#EF4444",
    },
  },
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { id } = useParams();
  const axiosbasurl = useAxiosBaseUrl();
  //   console.log(id);

  const {
    isLoading, // ✅ isPending এর জায়গায় isLoading
    isError,
    data: parcelInfo = {},
    error,
  } = useQuery({
    queryKey: ["parcel", id],
    queryFn: async () => {
      const res = await axiosbasurl.get(`/parcels/${id}`);
      return res.data; // res.data = { success, message, data }
    },
    enabled: !!id, // id থাকলে তবেই fetch হবে
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 mt-10">
        Error: {error?.message || "Something went wrong"}
      </div>
    );
  }

  const amount = parcelInfo.data.totalCost;
  const coinamount = amount * 100;

  const parceltrackingid = parcelInfo.data.trackingId;

  // console.log(parcelInfo);
  // console.log(coinamount);
  // console.log(amount)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setLoading(true);

    try {
      // 1️⃣ PaymentMethod তৈরি করা (optional, কিন্তু log রাখতে পারো)
      const { error: paymentMethodError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card,
        });

      if (paymentMethodError) {
        setErrorMsg(paymentMethodError.message);
        console.error("[PaymentMethod Error]=", paymentMethodError);
        setLoading(false);
        return;
      } else {
        console.log("[PaymentMethod]=", paymentMethod);
      }

      // 2️⃣ Server থেকে clientSecret নেওয়া
      const res = await axiosbasurl.post("/create-payment-intent", {
        coinamount,
        parceltrackingid,
      });

      const clientSecret = res.data.clientSecret;
      console.log(clientSecret)

      if (!clientSecret) {
        setErrorMsg("Failed to get payment client secret!");
        setLoading(false);
        return;
      }

      // 3️⃣ Confirm the payment
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: "Test User", // চাইলে dynamic নাম দিতে পারো
            },
          },
        });

      if (confirmError) {
        setErrorMsg(confirmError.message);
        console.error("[Confirm Payment Error]=", confirmError);
      } else if (paymentIntent.status === "succeeded") {
        setSuccessMsg("✅ Payment successful!");
        console.log("[Payment Success]=", paymentIntent);

        // চাইলে এখানে backend-এ payment save করা যাবে
        // await axiosbasurl.post("/save-payment", {
        //   trackingId: parceltrackingid,
        //   amount: coinamount / 100,
        //   transactionId: paymentIntent.id,
        //   status: paymentIntent.status,
        // });
      }
    } catch (err) {
      console.error("[Server Error]=", err);
      setErrorMsg("Server error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-base-100 rounded-2xl shadow-lg border border-base-300">
      <h2 className="text-2xl font-semibold mb-4 text-center text-primary">
        💳 Secure Payment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="p-3 border rounded-lg bg-base-200 focus-within:ring-2 focus-within:ring-primary transition">
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>

        {errorMsg && (
          <p className="text-red-500 text-sm text-center">{errorMsg}</p>
        )}
        {successMsg && (
          <p className="text-green-600 text-sm text-center">{successMsg}</p>
        )}

        <button
          type="submit"
          disabled={!stripe || loading}
          className="btn btn-primary w-full mt-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <>
              <FaBangladeshiTakaSign className="-mr-1" />
              {amount} Pay
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
