import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";

const Layout = () => {
  return (
    <div className="container-fluid">
      <HeaderBar />
      <div className="cobtainer-fluid">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
