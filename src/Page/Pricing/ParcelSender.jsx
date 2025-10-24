import { BiErrorCircle } from "react-icons/bi";
import useAuth from "../../Hooks/useAuth";

const ParcelSender = ({
  register,
  errors,
  warehouseList,
  senderSelectedWarehouse,
  senderSelecteddistrict,
  senderPickUpDistricts,
  senderPickUpRigons,
}) => {
  const {user} = useAuth();
  return (
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
            defaultValue={user.displayName}
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
            defaultValue={""}
          >
            <option disabled value={""}>
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
  );
};

export default ParcelSender;
