import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";

const Layout = () => {
  return (
    <div>
      <HeaderBar />
      <div className="container mx-auto h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
