import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Error from "../Page/Error/Error";
import User from "../DashboradPage/User/User";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Page/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../DashboradPage/Dashborad/Dashboard";
import Register from "../Page/Register/Register";
import Forget from "../Page/Forget/Forget";
import TrackOrder from "../Page/TrackOrder/TrackOrder";
import Coverage from "../Page/Coverage/Coverage";
import AboutUs from "../Page/AboutUs/AboutUs";
import Services from "../Page/Services/Services";
import BeARider from "../Page/BeARider/BeARider";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/coverage",
        Component: Coverage,
      },
      {
        path: "/aboutus",
        Component: AboutUs,
      },
      {
        path: "/trackorder",
        Component: TrackOrder,
      },
      {
        path: "/bearider",
        Component: BeARider,
      },
    ],
  },
  {
    path: "/",
    Component: LoginLayout,
    errorElement: <Error></Error>,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "forget",
        Component: Forget,
      }
    ]
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "user",
        Component: User,
      },
    ],
  },
]);

export default router;
