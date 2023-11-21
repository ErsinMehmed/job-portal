import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Navbar from "../website/Navbar";
import MobileMenu from "../website/MobileMenu";

const WebsiteLayout = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='w-full bg-[#f3f7fd] min-h-screen'>
      <Navbar
        onMenuClick={toggleMenu}
        show={isVisible}
      />

      <MobileMenu
        outsideOnClick={toggleMenu}
        show={isVisible}
      />

      <div className='mt-16'>{props.children}</div>
    </div>
  );
};

export default WebsiteLayout;
