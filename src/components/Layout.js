import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
