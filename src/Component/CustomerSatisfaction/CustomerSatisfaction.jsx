import "./CustomerSatisfaction.css";
import CustomerSatisfactionimg1 from "../../assets/images/location-merchant.png";
import CustomerSatisfactionimg2 from "../../assets/images/be-a-merchant-bg.png";


const CustomerSatisfaction = () => {
  return (
    <div className="bg_color md:rounded-[80px] rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between md:p-28 p-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${CustomerSatisfactionimg2})`, backgroundRepeat: "no-repeat" }}>
      <div className="text-white text-left flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-3xl leading-snug mb-6">
          Merchant and Customer Satisfaction is Our First Priority
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mb-10">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="border-2 border-[#caeb66] text-white font-semibold px-6 py-3 rounded-lg transition duration-500 ease-in-out hover:bg-[#caeb66] hover:text-black hover:shadow-[0_5px_15px_#caeb66] hover:-translate-y-1">
            Become a Merchant
          </button>

          <button className="border-2 border-[#caeb66] text-white font-semibold px-6 py-3 rounded-lg transition duration-500 ease-in-out hover:bg-[#caeb66] hover:text-black hover:shadow-[0_5px_15px_#caeb66] hover:-translate-y-1">
            Earn with Profast Courier
          </button>
        </div>
      </div>
      <div>
        <img src={CustomerSatisfactionimg1} alt="Customer Satisfaction Image" className="h-80"/>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
