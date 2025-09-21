import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
// import Navbarr from "../Component/Reusable/UI/Navbar";
const Layout = ({ cart }) => {
  return (
    <div>
      <Navbar cart={cart} />
      {/* <Navbarr /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
