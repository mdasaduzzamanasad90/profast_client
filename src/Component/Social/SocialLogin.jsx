import { Icon } from "@iconify/react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import useAuth from "../../Hooks/UseAuth";
const googleprovider = new GoogleAuthProvider();
const facebookprovider = new FacebookAuthProvider();
const githubprovider = new GithubAuthProvider();

const SocialLogin = () => {
  const { socialsigninandsignup } = useAuth();

  const loginhandle = (provider) => {
    socialsigninandsignup(provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="w-full">
      {/* Google */}
      <div data-aos="fade-up" data-aos-delay="1100">
        <button
          onClick={() => loginhandle(googleprovider)}
          className="btn flex items-center justify-center gap-3 bg-base-100 text-gray-800 font-semibold border-none mt-4 px-6 py-2 rounded-xl shadow-md hover:bg-[#b8db58] hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-[#CAEB66]/50 transition-all duration-300 w-full"
        >
          <Icon icon="logos:google-icon" width="22" height="22" />
          Login With Google
        </button>
      </div>

      {/* Facebook */}
      <div data-aos="fade-up" data-aos-delay="1200">
        <button
          onClick={() => loginhandle(facebookprovider)}
          className="btn flex items-center justify-center gap-3 bg-base-100 text-gray-800 font-semibold border-none mt-4 px-6 py-2 rounded-xl shadow-md hover:bg-[#b8db58] hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-[#CAEB66]/50 transition-all duration-300 w-full"
        >
          <Icon icon="logos:facebook" width="22" height="22" />
          Login With Facebook
        </button>
      </div>

      {/* GitHub */}
      <div data-aos="fade-up" data-aos-delay="1300">
        <button
          onClick={() => loginhandle(githubprovider)}
          className="btn flex items-center justify-center gap-3 bg-base-100 text-gray-800 font-semibold border-none mt-4 px-6 py-2 rounded-xl shadow-md hover:bg-[#b8db58] hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-[#CAEB66]/50 transition-all duration-300 w-full"
        >
          <Icon icon="logos:github-icon" width="22" height="22" />
          Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
