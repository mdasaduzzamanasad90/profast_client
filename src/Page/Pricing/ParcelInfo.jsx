import { BiErrorCircle } from "react-icons/bi";

const ParcelInfo = ({ register, errors, parcelType }) => {
  return (
    <div className="rounded-xl p-6 shadow-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        Parcel Details
      </h3>

      <div className="md:flex justify-between w-full items-center">
        <fieldset className="flex gap-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="Document"
              {...register("parcelType")}
              className="radio radio-primary"
              defaultChecked
            />
            <span className="text-sm font-medium text-gray-700">Document</span>
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
        <h3 className="text-sm opacity-50">"Extra grams over the parcel weight are free!"</h3>
      </div>

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
            step="0"
            min="0"
            {...register("parcelWeight", {
              required: parcelType === "Not-Document",
            })}
            placeholder="Parcel Weight (KG)"
            className="input input-bordered w-full"
            disabled={parcelType === "Document"}
          />
          {/* error massages Parcel Weight (KG) required */}
          {errors.parcelWeight?.type === "required" && (
            <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
              <BiErrorCircle className="text-lg" />
              Parcel Weight (KG) is required
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParcelInfo;
