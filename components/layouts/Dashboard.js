"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../dashboard/Navbar";
import SideBar from "../dashboard/Sidebar";
import MobileMenu from "../dashboard/MobileMenu";
import { userStore } from "@/stores/useStore";

const DashboardLayout = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    userStore.loadCurrentUserData();
  }, []);

  return (
    <div className="flex items-center w-full bg-[#f5f5f7]">
      <SideBar show={isVisible} />

      <MobileMenu show={isVisible} />

      <div
        className={`${
          isVisible ? "sm:ml-16" : "sm:ml-56 2xl:ml-72"
        } transition-all duration-500 w-full min-h-screen`}
      >
        <Navbar onMenuClick={toggleMenu} show={isVisible} />

        {props.children}
      </div>
    </div>
  );
};

export default DashboardLayout;
