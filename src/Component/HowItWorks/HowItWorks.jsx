import React from "react";
import {
  BiPackage,
  BiMoneyWithdraw,
  BiBuildingHouse,
  BiUserCircle,
} from "react-icons/bi";

const howitworks = [
  {
    tittle: "Booking Pick & Drop",
    description:
      "Schedule your pickups and deliveries effortlessly, whether it’s personal parcels or business shipments.",
    icon: (
      <BiPackage className="text-6xl sm:text-5xl md:text-4xl text-blue-600" />
    ),
  },
  {
    tittle: "Cash On Delivery",
    description:
      "Secure and convenient payments — pay only when your package reaches its destination.",
    icon: (
      <BiMoneyWithdraw className="text-6xl sm:text-5xl md:text-4xl text-green-600" />
    ),
  },
  {
    tittle: "Delivery Hub",
    description:
      "Centralized hubs ensure faster processing and seamless delivery across multiple locations.",
    icon: (
      <BiBuildingHouse className="text-6xl sm:text-5xl md:text-4xl text-orange-600" />
    ),
  },
  {
    tittle: "Booking SME & Corporate",
    description:
      "Tailored delivery solutions for small businesses and corporate clients with priority handling.",
    icon: (
      <BiUserCircle className="text-6xl sm:text-5xl md:text-4xl text-purple-600" />
    ),
  },
];

const HowItWorks = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="bg-gray-50 py-12 px-6 lg:px-20 mt-5 md:mt-32"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
        How it Works
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
        {howitworks.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 200}
            className="h-full"
          >
            <div className="flex flex-col justify-between items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-2xl hover:bg-[#CAEB66] transition duration-500 ease-in-out transform hover:-translate-y-2 h-full">
              {/* এই অংশ সমান উচ্চতা পাবে */}
              <div className="flex flex-col justify-start items-center flex-grow">
                <div className="mb-4 text-6xl sm:text-5xl md:text-4xl lg:text-5xl">
                  {item.icon}
                </div>

                {/* title কে equal height করতে */}
                <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-semibold mb-2 min-h-[60px] flex items-center justify-center">
                  {item.tittle}
                </h3>

                {/* description equal height */}
                <p className="text-gray-600 text-sm sm:text-base md:text-sm lg:text-base min-h-[80px] flex items-center justify-center">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
