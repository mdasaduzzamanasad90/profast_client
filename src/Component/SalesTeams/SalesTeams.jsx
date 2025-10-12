import Marquee from "react-fast-marquee";
import logoimg1 from "../../assets/brands/casio.png";
import logoimg2 from "../../assets/brands/amazon.png";
import logoimg3 from "../../assets/brands/moonstar.png";
import logoimg4 from "../../assets/brands/start.png";
import logoimg5 from "../../assets/brands/start-people 1.png";
import logoimg6 from "../../assets/brands/randstad.png";
import deviderimg from "../../assets/Line 8/Line 8@2x.png";
import servicesimg1 from "../../assets/images/live-tracking.png";
import servicesimg2 from "../../assets/images/Safe Delivery.png";
import servicesimg3 from "../../assets/images/suport.png";
import "./SalesTeams.css";

const SalesTeams = () => {
  const companylogoimage = [
    logoimg1,
    logoimg2,
    logoimg3,
    logoimg4,
    logoimg5,
    logoimg6,
  ];

  const servicesimages = [servicesimg1, servicesimg2, servicesimg3];

  const websiteservicedetails = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <div className="text-center md:mb-20 my-6">
      <h1 className="text-xl md:text-3xl font-semibold md:mb-20 mb-6">
        We've helped thousands of sales teams
      </h1>

      {/* Company logos */}
      <Marquee
        pauseOnHover={true}
        speed={30}
        gradient={true}
        gradientColor="#EAECED"
        gradientWidth={150}
      >
        {companylogoimage.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Company logo ${index + 1}`}
            className="md:mx-10 mx-5 md:h-10 h-5 w-auto object-contain"
          />
        ))}
      </Marquee>

      {/* Service details */}
      <div className="border-y-2 md:rounded-[80px] rounded-[20px] border-dotted md:py-20 py-6 flex flex-col justify-center items-center gap-5 md:gap-10 transition-all duration-700 ease-in-out md:mt-32 mt-10">
        {websiteservicedetails.map((servicedetail, index) => (
          <div
            key={servicedetail.id}
            data-aos={
              index === 0
                ? "fade-right"
                : index === 1
                ? "fade-left"
                : "fade-right"
            }
          >
            <div className="group md:gap-10 flex flex-col md:flex-row bg-white items-center text-center md:text-left hover:scale-105 transition-transform duration-500 ease-in-out p-6 md:p-10 rounded-lg shadoweffects">
              {/* service image + divider */}
              <div className="md:flex gap-5 items-center md:items-start mb-4 md:mb-0">
                <img
                  src={servicesimages[index]}
                  alt={servicedetail.title}
                  className="h-20 w-20 md:h-[100px] md:w-[100px] mb-4 transition-all duration-500 object-cover"
                />
                <img
                  src={deviderimg}
                  alt="divider"
                  className="hidden md:block h-[100px] opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* text section */}
              <div className="md:w-[500px]">
                <h1 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                  {servicedetail.title}
                </h1>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {servicedetail.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesTeams;
