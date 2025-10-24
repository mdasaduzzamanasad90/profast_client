import { BiErrorCircle } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import uploadimg from "../../assets/images/image-upload-icon.png";
import SocialRegister from "../../Component/Social/SocialRegister";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/UseAuth";
import { updateProfile } from "firebase/auth";
import useNavigateYourLocation from "../../Hooks/useNavigateYourLocation";
const Register = () => {
  const [eyes, seteyes] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createuser } = useAuth();
  const navigate = useNavigate()
  const from = useNavigateYourLocation();

  const onSubmit = (data) => {
    // console.log(data);
    // console.log(createuser);
    createuser(data.email, data.password)
      .then((Result) => {
        // console.log(Result.user);
        const user = Result.user;
        
        // firebase add user name 
        updateProfile(user, { displayName: data.name })
          .then(() => {
            console.log("Name updated:", data.name );
          })
          .catch((error) => {
            console.error("Error updating name:", error);
          });
          navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col justify-center items-start w-full md:px-16">
      <div data-aos="zoom-in" className="w-full">
        <h1 className="md:text-5xl text-3xl font-bold text-gray-800 mt-6">
          Create an Account
        </h1>
        <p className="text-gray-500 mb-8 mt-1">Register with Profast</p>
        <div className="w-full flex justify-center mb-4 md:mb-6">
          <img
            src={uploadimg}
            alt="Upload Image"
            className="md:w-16 w-12 h-12 object-cover rounded-full border-2 border-[#CAEB66] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="card bg-base-100 w-full shadow-md border border-gray-100 rounded-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset space-y-4">
                {/* Name field */}
                <div className="space-y-2">
                  <label className="label text-sm font-medium text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="bg-white w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#94A3B8] focus:border-[#94A3B8] focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 px-3 py-2"
                    placeholder="Enter your name"
                  />
                  {/* error massages email required */}
                  {errors.name?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Name is required
                    </p>
                  )}
                </div>
                {/* Email field */}
                <div className="space-y-2">
                  <label className="label text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/,
                    })}
                    className="bg-white w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#94A3B8] focus:border-[#94A3B8] focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 px-3 py-2"
                    placeholder="Enter your email"
                  />
                  {/* error massages email required */}
                  {errors.email?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Email is required
                    </p>
                  )}
                  {/* error massages email pattern */}
                  {errors.email?.type === "pattern" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Please enter a valid Gmail address <br />
                      (e.g., mdasad@gmail.com)
                    </p>
                  )}
                </div>
                {/* Password field */}
                <div className="space-y-2 relative">
                  <label className="label text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <input
                    type={eyes ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                    })}
                    className="bg-white w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#94A3B8] focus:border-[#94A3B8] focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 px-3 py-2"
                    placeholder="Enter your password"
                  />
                  {eyes ? (
                    <IoEyeSharp
                      onClick={() => seteyes(!eyes)}
                      size={15}
                      className="absolute top-9 right-5 cursor-pointer"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => seteyes(!eyes)}
                      size={15}
                      className="absolute top-9 right-5 cursor-pointer"
                    />
                  )}
                  {/* error massages password required  */}
                  {errors.password?.type === "required" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Password is required
                    </p>
                  )}
                  {/* error massages minlength */}
                  {errors.password?.type === "minLength" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Password must be at least 6 characters long
                    </p>
                  )}
                  {/* error massages maxlength */}
                  {errors.password?.type === "maxLength" && (
                    <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-1 md:ml-2">
                      <BiErrorCircle className="text-lg" />
                      Password must not exceed 12 characters
                    </p>
                  )}
                </div>

                <button className="btn bg-[#CAEB66] text-gray-800 font-semibold border-none px-6 py-2 rounded-xl shadow-md hover:bg-[#b8db58] hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-[#CAEB66]/50 transition-all duration-300 w-full">
                  Register
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 gap-3">
          <p className="text-gray-500">Already have an account ?</p>
          <p className="link link-hover text-[#b8db58] hover:text-blue-400 text-transition-all duration-300 hover:-translate-y-1">
            <Link to={"/login"}> Login</Link>
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
      <SocialRegister></SocialRegister>
    </div>
  );
};

export default Register;
