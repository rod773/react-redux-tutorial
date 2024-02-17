import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";

const Layout = () => {
  return (
    <div style={{ height: "100%" }}>
      <HeaderBar />
      <Outlet />
    </div>
  );
};

export default Layout;
