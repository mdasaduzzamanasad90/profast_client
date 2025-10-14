import { Outlet } from "react-router";
import authimage from "../assets/images/authImage.png";
import ProfastLogo from "../ShareComponent/ProfastLogo/ProfastLogo";

const LoginLayout = () => {
  return (
    <div>
      <div className="h-screen bg-gradient-to-r from-[#FAFDF0] to-white flex items-center justify-center">
        <div className="md:max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center bg-white shadow-xl rounded-2xl overflow-hidden">
          <ProfastLogo />
          {/* Left Section */}
          <Outlet></Outlet>
          {/* Right Section */}
          <div className="hidden md:flex w-1/2 bg-[#FAFDF0] justify-center items-center p-6">
            <img
              src={authimage}
              alt="Authentication Illustration"
              className="max-w-md drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
