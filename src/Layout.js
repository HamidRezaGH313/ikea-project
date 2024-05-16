import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <div className="w-full ">
      <div className="bg-red-500 absolute w-[100%]">hello</div>
      </div> */}

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
