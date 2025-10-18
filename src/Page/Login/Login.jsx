import { Icon } from "@iconify/react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full md:px-20">
      <div data-aos="zoom-in" className="w-full">
        <h1 className="md:text-5xl text-3xl font-bold text-gray-800 mt-6">
          Welcome Back
        </h1>
        <p className="text-gray-500 mb-8 mt-1">
          Login with Profast to continue
        </p>
        <div className="card bg-base-100 w-full max-w-sm shadow-md border border-gray-100 rounded-xl">
          <div className="card-body">
            <fieldset className="fieldset space-y-4">
              <div className="space-y-2">
                <label className="label text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-white w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#94A3B8] focus:border-[#94A3B8] focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 px-3 py-2"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label className="label text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  className="bg-white w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#94A3B8] focus:border-[#94A3B8] focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 px-3 py-2"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <a className="link link-hover text-[#b8db58] hover:text-blue-400 transition-all duration-300 hover:-translate-y-1">
                  Forgot password?
                </a>
              </div>

              <button className="btn bg-[#CAEB66] text-gray-800 font-semibold border-none px-6 py-2 rounded-xl shadow-md hover:bg-[#b8db58] hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-[#CAEB66]/50 transition-all duration-300 w-full">
                Login
              </button>
            </fieldset>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 gap-3">
          <p className="text-gray-500">Don't have any account ?</p>
          <p className="link link-hover text-[#b8db58] hover:text-blue-400 text-transition-all duration-300 hover:-translate-y-1">
            <Link to={"/register"}> Register</Link>
          </p>
        </div>
      </div>
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        className="divider"
      >
        OR
      </div>
      <div className="w-full">
        {/* Google */}
        <div data-aos="fade-up" data-aos-delay="1100">
          <button className="btn flex items-center justify-center gap-3 bg-base-100 text-gray-800 font-semibold border-none mt-4 px-6 py-2 rounded-xl shadow-md hover:bg-[#b8db58] hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-[#CAEB66]/50 transition-all duration-300 w-full">
            <Icon icon="logos:google-icon" width="22" height="22" />
            Login With Google
          </button>
        </div>

        {/* Facebook */}
        <div data-aos="fade-up" data-aos-delay="1200">
          <button className="btn flex items-center justify-center gap-3 bg-base-100 text-gray-800 font-semibold border-none mt-4 px-6 py-2 rounded-xl shadow-md hover:bg-[#b8db58] hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-[#CAEB66]/50 transition-all duration-300 w-full">
            <Icon icon="logos:facebook" width="22" height="22" />
            Login With Facebook
          </button>
        </div>

        {/* GitHub */}
        <div data-aos="fade-up" data-aos-delay="1300">
          <button className="btn flex items-center justify-center gap-3 bg-base-100 text-gray-800 font-semibold border-none mt-4 px-6 py-2 rounded-xl shadow-md hover:bg-[#b8db58] hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-[#CAEB66]/50 transition-all duration-300 w-full">
            <Icon icon="logos:github-icon" width="22" height="22" />
            Login With GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
