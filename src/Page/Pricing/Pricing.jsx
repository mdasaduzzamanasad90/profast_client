import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

const Pricing = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [regionData, setregionData] = useState([]);
  const [warehouseList, setwarehouseList] = useState([]);

  //   reginon get data function
  const reginonhandlefunc = () => {
    fetch("warehouses.json")
      .then((res) => res.json())
      .then((data) => setregionData(data));
  };
  //   warehouse get data function
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
  // console.log(senderSelectedWarehouse)
  const senderSelecteddistrict = watch("senderDistrict");
  // console.log(senderSelecteddistrict)
  const receiverSelectedWarehouse = watch("receiverWarehouse");
  const receiverSelecteddistrict = watch("receiverDistrict");
  const parcelType = watch("parcelType");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  // Sender section : vibakh theke district খুঁজে বের করা
  const senderPickUpDistricts = regionData
    .filter((item) => item.region === senderSelectedWarehouse) // শুধুমাত্র Dhaka region এর object
    .map((item) => item.district); // প্রতিটি object থেকে district বের করা

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

  return (
    <div className="md:mb-20 mt-24 mb-10">
      <div className="max-w-6xl md:mx-auto mx-5 bg-white shadow-xl rounded-2xl md:p-10 p-5">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Add New Parcel
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* ===== Parcel Info ===== */}
          <div className="rounded-xl p-6 shadow-lg bg-gray-50">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Parcel Details
            </h3>

            <fieldset className="flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="Document"
                  {...register("parcelType")}
                  className="radio radio-primary"
                  defaultChecked
                />
                <span className="text-sm font-medium text-gray-700">
                  Document
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="Not-Document"
                  {...register("parcelType")}
                  className="radio radio-primary"
                />
                <span className="text-sm font-medium text-gray-700">
                  Not-Document
                </span>
              </label>
            </fieldset>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="label-text font-medium text-gray-700">
                  Parcel Name
                </label>
                <input
                  type="text"
                  {...register("parcelName", { required: true })}
                  placeholder="Enter parcel name"
                  className="input input-bordered w-full"
                />
                {/* error massages parcel required */}
                {errors.parcelName?.type === "required" && (
                  <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                    <BiErrorCircle className="text-lg" />
                    Parcel Name is required
                  </p>
                )}
              </div>
              <div>
                <label className="label-text font-medium text-gray-700">
                  Parcel Weight (KG)
                </label>
                <input
                  type="number"
                  {...register("parcelWeight", {
                    required: parcelType === "Not-Document",
                  })}
                  placeholder="Parcel Weight (KG)"
                  className="input input-bordered w-full"
                  disabled={parcelType === "Document"}
                />
                {/* error massages  Parcel Weight (KG) required */}
                {errors.parcelWeight?.type === "required" && (
                  <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                    <BiErrorCircle className="text-lg" />
                    Parcel Weight (KG) is required
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ===== Sender & Receiver ===== */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Sender */}
            <div className="rounded-xl p-6 bg-gray-50 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Sender Details
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="label-text font-medium text-gray-700">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    {...register("senderName", { required: true })}
                    placeholder="Sender Name"
                    className="input input-bordered w-full"
                  />
                  {/* error massages parcel required */}
                  {errors.senderName?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Sender Name is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="label-text font-medium text-gray-700">
                    Sender Pickup Wire house
                  </label>
                  <select
                    {...register("senderWarehouse", { required: true })}
                    className="select select-bordered w-full"
                    defaultValue={""}
                  >
                    <option disabled value={""}>
                      Select Wire house
                    </option>
                    {warehouseList.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {/* error massages parcel required */}
                  {errors.senderWarehouse?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Sender Pickup Wire house is required
                    </p>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="label-text font-medium text-gray-700">
                    Sender District
                  </label>
                  <select
                    {...register("senderDistrict", { required: true })}
                    className="select select-bordered w-full"
                    disabled={!senderSelectedWarehouse}
                    defaultValue={""}
                  >
                    <option disabled value={""}>
                      {senderSelectedWarehouse
                        ? "Select Sender District"
                        : "Select Sender Warehouse First"}
                    </option>
                    {senderPickUpDistricts.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                  {/* error massages parcel required */}
                  {errors.senderDistrict?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Sender District is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="label-text font-medium text-gray-700">
                    Sender Region
                  </label>
                  <select
                    {...register("senderRegion", { required: true })}
                    className="select select-bordered w-full"
                    disabled={!senderSelecteddistrict}
                  >
                    <option disabled selected>
                      {senderSelecteddistrict
                        ? "Select Sender Region"
                        : "Select Sender District First"}
                    </option>
                    {senderPickUpRigons.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                  {/* error massages parcel required */}
                  {errors.senderRegion?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Sender Region is required
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="label-text font-medium text-gray-700">
                    Sender Address
                  </label>
                  <input
                    type="text"
                    {...register("senderAddress", { required: true })}
                    placeholder="Enter Sender Address"
                    className="input input-bordered w-full"
                  />
                  {/* error massages parcel required */}
                  {errors.senderAddress?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Sender Address is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="label-text font-medium text-gray-700">
                    Sender Contact No
                  </label>
                  <input
                    type="text"
                    {...register("senderPhone", { required: true })}
                    placeholder="Sender Phone Number"
                    className="input input-bordered w-full"
                  />
                  {/* error massages parcel required */}
                  {errors.senderPhone?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Sender Contact No is required
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="label-text font-medium text-gray-700">
                  Pickup Instruction
                </label>
                <textarea
                  {...register("senderInstruction")}
                  className="textarea textarea-bordered w-full"
                  placeholder="Enter Any Special Instruction..."
                ></textarea>
              </div>
            </div>

            {/* Receiver */}
            <div className="rounded-xl p-6 bg-gray-50 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Receiver Details
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="label-text font-medium text-gray-700">
                    Receiver Name
                  </label>
                  <input
                    type="text"
                    {...register("receiverName", { required: true })}
                    placeholder="Receiver Name"
                    className="input input-bordered w-full"
                  />
                  {/* error massages parcel required */}
                  {errors.receiverName?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Receiver Name is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="label-text font-medium text-gray-700">
                    Receiver Delivery Wire house
                  </label>
                  <select
                    {...register("receiverWarehouse", { required: true })}
                    className="select select-bordered w-full"
                    defaultValue={""}
                  >
                    <option disabled value={""}>
                      Select Wire house
                    </option>
                    {warehouseList.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {/* error massages parcel required */}
                  {errors.receiverWarehouse?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Receiver Delivery Wire house is required
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="label-text font-medium text-gray-700">
                    Receiver District
                  </label>
                  <select
                    {...register("receiverDistrict", { required: true })}
                    className="select select-bordered w-full"
                    disabled={!receiverSelectedWarehouse}
                    defaultValue={""}
                  >
                    <option disabled value={""}>
                      {receiverSelectedWarehouse
                        ? "Select Receiver District"
                        : "Select Receiver Warehouse First"}
                    </option>
                    {receiverPickUpDistricts.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                  {/* error massages parcel required */}
                  {errors.receiverDistrict?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Receiver District is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="label-text font-medium text-gray-700">
                    Receiver Region
                  </label>
                  <select
                    {...register("receiverRegion", { required: true })}
                    className="select select-bordered w-full"
                    disabled={!receiverSelecteddistrict}
                  >
                    <option disabled selected>
                      {receiverSelecteddistrict
                        ? "Select Receiver Region"
                        : "Select Receiver District First"}
                    </option>
                    {receiverPickUpRigons.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                  {/* error massages parcel required */}
                  {errors.receiverRegion?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Receiver Region is required
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="label-text font-medium text-gray-700">
                    Receiver Address
                  </label>
                  <input
                    type="text"
                    {...register("receiverAddress", { required: true })}
                    placeholder="Enter Receiver Address"
                    className="input input-bordered w-full"
                  />
                  {/* error massages parcel required */}
                  {errors.receiverAddress?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Receiver Address is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="label-text font-medium text-gray-700">
                    Receiver Contact No
                  </label>
                  <input
                    type="text"
                    {...register("receiverPhone", { required: true })}
                    placeholder="Receiver Phone Number"
                    className="input input-bordered w-full"
                  />
                  {/* error massages parcel required */}
                  {errors.receiverPhone?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Receiver Contact No is required
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="label-text font-medium text-gray-700">
                  Delivery Instruction
                </label>
                <textarea
                  {...register("receiverInstruction")}
                  className="textarea textarea-bordered w-full"
                  placeholder="Enter Delivery Instruction..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* ===== Footer ===== */}
          <div className="text-center mt-10">
            <p className="text-sm text-gray-600 mb-4">
              * PickUp Time: 4pm - 7pm (Approx.)
            </p>
            <button
              type="submit"
              className="btn bg-[#CAEB66] text-gray-800 font-semibold border-none px-6 py-2 rounded-lg shadow-md hover:bg-[#b8db58] hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-[#CAEB66]/50 transition-all duration-500"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pricing;
