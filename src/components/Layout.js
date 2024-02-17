import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";

const Layout = () => {
  return (
    <div>
      <HeaderBar />
      <Outlet />
    </div>
  );
};

export default Layout;
