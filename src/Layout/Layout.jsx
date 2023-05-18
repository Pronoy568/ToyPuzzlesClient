import React from "react";
import Navbar from "../pages/share/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/share/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
