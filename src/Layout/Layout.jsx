import { Outlet } from "react-router";
import Navbar from "../ShareComponent/Navbar/Navbar";
import Footer from "../ShareComponent/Footer/Footer";

const Layout = () => {
  return (
    <div className="mx-5 md:mx-0">
      <div className="md:pt-3 pt-1">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
