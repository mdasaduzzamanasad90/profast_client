import { Outlet } from "react-router";

const DashboradLayout = () => {
  return (
    <div>
        <h1>this is dashborad header </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboradLayout;
