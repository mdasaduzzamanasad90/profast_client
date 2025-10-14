import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
        <h1>this is dashborad header </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
