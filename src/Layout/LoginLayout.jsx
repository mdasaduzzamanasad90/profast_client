import { Outlet } from "react-router";
import authimage from "../assets/images/authImage.png";
import ProfastLogo from "../ShareComponent/ProfastLogo/ProfastLogo";

const LoginLayout = () => {
  return (
    <div className="inter">
      <div className="min-h-screen bg-gradient-to-r from-[#FAFDF0] to-white flex items-center justify-center p-4">
        <div className="w-full md:max-w-6xl lg:max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 ease-in-out">
          {/* Left Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              className="mb-4"
            >
              <ProfastLogo />
            </div>
            <Outlet />
          </div>

          {/* Right Section */}
          <div
            data-aos="fade-left"
            className="hidden md:flex w-1/2 bg-gradient-to-br from-[#FAFDF0] to-[#F3F8E8] justify-center items-center p-8 relative overflow-hidden"
          >
            <img
              src={authimage}
              alt="Authentication Illustration"
              className="max-w-4xl drop-shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
