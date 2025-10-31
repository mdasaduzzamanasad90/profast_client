import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useParams } from "react-router";
import useAxiosBaseUrl from "../../Hooks/useAxiosBaseUrl";
import { useQuery } from '@tanstack/react-query'
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
    isLoading,  // ✅ isPending এর জায়গায় isLoading
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


  const amount = parcelInfo
  console.log(amount)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrorMsg(error.message);
      console.error("[error]=", error);
    } else {
      setSuccessMsg("✅ Payment method created successfully!");
      console.log("[PaymentMethod]=", paymentMethod);
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
            "Pay Now"
          )}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
