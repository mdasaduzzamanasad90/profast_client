import { BiErrorCircle } from "react-icons/bi";

const ParcelReceiver = ({
  register,
  errors,
  warehouseList,
  receiverSelectedWarehouse,
  receiverSelecteddistrict,
  receiverPickUpDistricts,
  receiverPickUpRigons,
}) => {
  return (
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
            defaultValue={""}
          >
            <option disabled value={""}>
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
  );
};

export default ParcelReceiver;
