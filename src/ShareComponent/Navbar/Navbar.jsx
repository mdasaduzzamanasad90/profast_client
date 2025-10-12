import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import ProfastLogo from "../ProfastLogo/ProfastLogo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="navbar lg:w-10/12 mx-auto py-3">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center gap-3">
          {/* Mobile Menu Button */}
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md transition ${
                        isActive
                          ? "text-[#CAEB66] font-semibold"
                          : "hover:text-[#CAEB66] text-gray-700"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <ProfastLogo />
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-[16px] font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                      isActive
                        ? "text-[#CAEB66] border-b-2 border-[#CAEB66]"
                        : "text-gray-700 hover:text-[#CAEB66]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-3">
          <button className="btn bg-[#CAEB66] hover:shadow-[0_5px_15px_#caeb66] hover:-translate-y-1 border-none hover:bg-[#b7d659] transition-all">
            Sign In
          </button>
          <button className="btn border-[#CAEB66] text-[#CAEB66] hover:bg-[#CAEB66] hover:text-black transition-all">
            Be a Rider
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
