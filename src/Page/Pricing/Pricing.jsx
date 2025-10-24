import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ParcelInfo from "./ParcelInfo";
import ParcelSenderAndReceiver from "./ParcelSenderAndReceiver";
import ParcelFooter from "./ParcelFooter";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import PricingRule from "./PricingRule";
import useAxiosBaseUrl from "../../Hooks/useAxiosBaseUrl";
import useAuth from "../../Hooks/useAuth";
const Pricing = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
    // control remove করে দিলাম - এটি ব্যবহার করা হচ্ছিল না
  } = useForm();
  const [regionData, setregionData] = useState([]);
  const [warehouseList, setwarehouseList] = useState([]);
  const axiosbaseurl = useAxiosBaseUrl();

  // region get data function
  const reginonhandlefunc = () => {
    fetch("warehouses.json")
      .then((res) => res.json())
      .then((data) => setregionData(data));
  };

  // warehouse get data function
  const warehousehandlefunction = () => {
    fetch("division.json")
      .then((res) => res.json())
      .then((data) => setwarehouseList(data));
  };

  useEffect(() => {
    reginonhandlefunc();
    warehousehandlefunction();
  }, []);

  // watch দিয়ে warehouse select করা হচ্ছে
  const senderSelectedWarehouse = watch("senderWarehouse");
  const senderSelecteddistrict = watch("senderDistrict");
  const receiverSelectedWarehouse = watch("receiverWarehouse");
  const receiverSelecteddistrict = watch("receiverDistrict");
  const parcelType = watch("parcelType");

  // Sender section : vibakh theke district খুঁজে বের করা
  const senderPickUpDistricts = regionData
    .filter((item) => item.region === senderSelectedWarehouse)
    .map((item) => item.district);

  // Sender section : district theke covered area khoje ber kora
  const senderPickUpRigons = regionData
    .filter((item) => item.district === senderSelecteddistrict)
    .flatMap((item) => item.covered_area || []);

  // Receiver section : vibakh theke district খুঁজে বের করা
  const receiverPickUpDistricts = regionData
    .filter((item) => item.region === receiverSelectedWarehouse)
    .map((item) => item.district);

  // Receiver section : district theke covered area khoje ber kora
  const receiverPickUpRigons = regionData
    .filter((item) => item.district === receiverSelecteddistrict)
    .flatMap((item) => item.covered_area || []);

  const onSubmit = (data) => {
    // console.log("Form Data:", data);

    const {
      parcelType,
      parcelWeight,
      senderDistrict,
      receiverDistrict,
      receiverRegion,
      senderRegion,
    } = data;

    // শহরের ভিতরে নাকি বাইরে — সেটা নির্ধারণ করবো
    const isWithinCity =
      senderDistrict && receiverDistrict && senderDistrict === receiverDistrict;

    let costDetails = "";
    let totalCost = 0;

    if (parcelType === "Document") {
      totalCost = isWithinCity ? 60 : 80;
      costDetails = `
        <tr>
          <td><strong>Parcel Type</strong></td>
          <td>Document</td>
        </tr>
        <tr>
          <td><strong>Delivery Area</strong></td>
          <td>${isWithinCity ? "Within City 🏙️" : "Outside City 🚚"}</td>
        </tr>
        <tr>
          <td><strong>Total Cost</strong></td>
          <td><span style="color:#10b981; font-weight:bold;">৳${totalCost}</span></td>
        </tr>
      `;
    } else {
      const weight = parseFloat(parcelWeight);
      if (weight <= 3) {
        totalCost = isWithinCity ? 110 : 150;
        costDetails = `
          <tr>
            <td><strong>Parcel Type</strong></td>
            <td>Non-Document (1kg to 3kg)</td>
          </tr>
          <tr>
            <td><strong>Delivery Area</strong></td>
            <td>${isWithinCity ? "Within City 🏙️" : "Outside City 🚚"}</td>
          </tr>
          <tr>
            <td><strong>Total Cost</strong></td>
            <td><span style="color:#10b981; font-weight:bold;">৳${totalCost}</span></td>
          </tr>
        `;
      } else {
        // const extraKg = weight;
        if (isWithinCity) {
          totalCost = weight * 40;
          costDetails = `
            <tr>
              <td><strong>Parcel Type</strong></td>
              <td>Non-Document (3kg up to)</td>
            </tr>
            <tr>
              <td><strong>Delivery Area</strong></td>
              <td>Within City 🏙️</td>
            </tr>
            <tr>
              <td><strong>Calculation</strong></td>
              <td>(৳40 × ${weight}kg)</td>
            </tr>
            <tr>
              <td><strong>Total Cost</strong></td>
              <td><span style="color:#10b981; font-weight:bold;">৳${totalCost}</span></td>
            </tr>
          `;
        } else {
          totalCost = weight * 40 + 40;
          costDetails = `
            <tr>
              <td><strong>Parcel Type</strong></td>
              <td>Non-Document (3kg up to)</td>
            </tr>
            <tr>
              <td><strong>Delivery Area</strong></td>
              <td>Outside City 🚚</td>
            </tr>
            <tr>
              <td><strong>Calculation</strong></td>
              <td>(৳40 × ${weight}kg) + ৳40 extra</td>
            </tr>
            <tr>
              <td><strong>Total Cost</strong></td>
              <td><span style="color:#10b981; font-weight:bold;">৳${totalCost}</span></td>
            </tr>
          `;
        }
      }
    }

    // 🔔 সুন্দরভাবে ডিজাইন করা SweetAlert
    Swal.fire({
      title:
        '<h2 style="color:#2563eb; font-weight:700;">📦 Parcel Cost Details</h2>',
      html: `
        <div style="
          background:#f9fafb;
          padding:20px;
          border-radius:12px;
          text-align:left;
          box-shadow:0 2px 10px rgba(0,0,0,0.05);
        ">
       <div style="display: flex; align-items: center; justify-content: center; gap: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; color: white; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
  <div style="text-align: center; background: rgba(255,255,255,0.2); padding: 15px 20px; border-radius: 8px; backdrop-filter: blur(10px);">
    <p style="margin: 0; font-size: 20px; font-weight: 600;">Sender</p>
    <p style="margin: 5px 0 0 0; font-size: 15px; font-weight: bold;">Dist : ${senderDistrict}</p>
    <p style="margin: 5px 0 0 0; font-size: 10px; opacity: 0.9;">Region : ${senderRegion}</p>
  </div>
  
  <div style="display: flex; align-items: center;">
    <span style="background: white; color: #667eea; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">→</span>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.2); padding: 15px 20px; border-radius: 8px; backdrop-filter: blur(10px);">
    <p style="margin: 0; font-size: 20px; font-weight: 600;">Receiver</p>
    <p style="margin: 5px 0 0 0; font-size: 15px; font-weight: bold;">Dist : ${receiverDistrict}</p>
    <p style="margin: 5px 0 0 0; font-size: 10px; opacity: 0.9;">Region : ${receiverRegion}</p>
  </div>
</div>

          <table style="width:100%; border-collapse:collapse; margin:15px 0;">
            ${costDetails}
          </table>
          <hr style="margin:15px 0; border-top:1px solid #e5e7eb;">
          <p style="color:#6b7280; font-size:14px; text-align:center;">
            Please confirm your parcel to continue ✅
          </p>
        </div>
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm Booking",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "⏳ Processing...",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });
        axiosbaseurl
          .post("/parcels", { ...data, email: user.email })
          .then((res) => {
            console.log(res.data);

            // শুধুমাত্র POST সফল হলে Swal দেখানো
            Swal.fire({
              title: "✅ Success!",
              text: "Your parcel is now pending for processing.",
              icon: "success",
              confirmButtonColor: "#10b981",
            });
            reset();
          })
          .catch((err) => {
            console.error(
              "Error adding parcel:",
              err.response?.data || err.message
            );

            // Error হলে Swal দেখানো
            Swal.fire({
              title: "❌ Failed!",
              text: "There was an error adding your parcel. Please try again.",
              icon: "error",
              confirmButtonColor: "#ef4444",
            });
          });
      }
    });
  };

  return (
    <div className="md:mb-20 mt-24 mb-10">
      <div className="max-w-6xl md:mx-auto mx-5 bg-white shadow-xl rounded-2xl md:p-10 p-5">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Add New Parcel
        </h1>

        <div className="mb-10">
          <PricingRule></PricingRule>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* ===== Parcel Info ===== */}
          <ParcelInfo
            register={register}
            errors={errors}
            parcelType={parcelType}
          />

          {/* ===== Sender & Receiver ===== */}
          <ParcelSenderAndReceiver
            register={register}
            errors={errors}
            warehouseList={warehouseList}
            senderSelectedWarehouse={senderSelectedWarehouse}
            senderSelecteddistrict={senderSelecteddistrict}
            receiverSelectedWarehouse={receiverSelectedWarehouse}
            receiverSelecteddistrict={receiverSelecteddistrict}
            senderPickUpDistricts={senderPickUpDistricts}
            senderPickUpRigons={senderPickUpRigons}
            receiverPickUpDistricts={receiverPickUpDistricts}
            receiverPickUpRigons={receiverPickUpRigons}
          />

          {/* ===== Footer ===== */}
          <ParcelFooter />
        </form>
      </div>
    </div>
  );
};

export default Pricing;
