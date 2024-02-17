import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";

const Layout = () => {
  return (
    <div>
      <HeaderBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
