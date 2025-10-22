const ParcelFooter = () => {
  return (
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
  );
};

export default ParcelFooter;