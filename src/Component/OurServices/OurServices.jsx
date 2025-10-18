import { useEffect, useState } from "react";
import {
  FaShippingFast,
  FaGlobeAsia,
  FaWarehouse,
  FaMoneyBillWave,
  FaBuilding,
  FaUndoAlt,
} from "react-icons/fa";

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const iconData = [
    {
      icon: <FaShippingFast className="text-4xl md:text-4xl text-blue-500" />,
      bg: "bg-blue-50",
    },
    {
      icon: <FaGlobeAsia className="text-4xl md:text-4xl text-green-500" />,
      bg: "bg-green-50",
    },
    {
      icon: <FaWarehouse className="text-4xl md:text-4xl text-yellow-500" />,
      bg: "bg-yellow-50",
    },
    {
      icon: (
        <FaMoneyBillWave className="text-4xl md:text-4xl text-emerald-500" />
      ),
      bg: "bg-emerald-50",
    },
    {
      icon: <FaBuilding className="text-4xl md:text-4xl text-purple-500" />,
      bg: "bg-purple-50",
    },
    {
      icon: <FaUndoAlt className="text-4xl md:text-4xl text-red-500" />,
      bg: "bg-red-50",
    },
  ];

  return (
    <div
      data-aos="zoom-in-up"
      className="px-4 sm:px-6 lg:px-20 md:mt-20"
    >
      {/* Heading */}
      <div className="text-center mt-6 md:mt-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
          Our Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg opacity-80 max-w-xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 my-6 sm:my-8 md:my-10 items-stretch">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200} // smooth stagger animation
            className="h-full"
          >
            <div className="flex text-black flex-col justify-between items-center text-center p-4 sm:p-5 md:p-6 bg-white border border-gray-100 rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl hover:bg-[#CAEB66] hover:border-[#CAEB66] transition duration-500 ease-in-out transform hover:-translate-y-2 h-full">
              {/* Icon container */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full mb-3 ${iconData[index]?.bg}`}
              >
                {iconData[index]?.icon}
              </div>

              {/* Title */}
              <h2 className="text-base sm:text-base md:text-lg font-semibold mb-1 min-h-[50px] flex items-center justify-center">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-sm text-gray-600 min-h-[80px] flex items-center justify-center">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
