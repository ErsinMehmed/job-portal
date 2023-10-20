import React, { useState, useEffect } from "react";
import Navbar from "../dashboard/Navbar";
import SideBar from "../dashboard/Sidebar";
import MobileMenu from "../dashboard/MobileMenu";

const DashboardLayout = (props) => {
  const [pageWidth, setPageWidth] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setPageWidth(window.innerWidth ?? null);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setPageWidth(window.innerWidth ?? null);
  };

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex items-center w-full">
      {pageWidth && pageWidth > 640 && <SideBar show={isVisible} />}
      {pageWidth && pageWidth < 640 && <MobileMenu show={isVisible} />}
      <div
        className={`${
          isVisible ? "sm:ml-16" : "sm:ml-56 xl:ml-64 2xl:ml-72"
        } transition-all duration-500 w-full`}
      >
        <Navbar onMenuClick={toggleMenu} show={isVisible} />
        {props.children}
      </div>
    </div>
  );
};

export default DashboardLayout;
