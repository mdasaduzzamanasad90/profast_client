import { Outlet } from "react-router";
import Navbar from "../ShareComponent/Navbar/Navbar";
import Footer from "../ShareComponent/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div className="md:max-w-7xl mx-auto">
        <div className="md:pt-3 pt-1">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
