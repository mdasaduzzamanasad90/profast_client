import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import ProfastLogo from "../ProfastLogo/ProfastLogo";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-black text-neutral-content p-10">
        <aside>
          <ProfastLogo></ProfastLogo>
          <p className="flex justify-center md:w-[600px]">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <p className="text-asad">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors duration-300 border rounded-full p-2"
            >
              <FaLinkedinIn size={24} />
            </a>
            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-colors duration-300 border rounded-full p-2"
            >
              <FaTwitter size={24} />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 border rounded-full p-2"
            >
              <FaFacebookF size={24} />
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 transition-colors duration-300 border rounded-full p-2"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
