import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Error from "../Page/Error/Error";
import About from "../Component/About/About";
import DashboradLayout from "../Layout/DashboradLayout";
import Dashborad from "../DashboradPage/Dashborad/Dashborad";
import User from "../DashboradPage/User/User";

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
        path: "about",
        Component: About,
      }
    ],
  },
  {
    path: "/dashborad",
    Component: DashboradLayout,
    children: [
        {
            index: true,
            Component: Dashborad,
        },
        {
          path: "user",
          Component: User,
        }
    ]
  }
]);

export default router;
