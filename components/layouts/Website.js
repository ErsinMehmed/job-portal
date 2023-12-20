import React, { useState, useEffect } from "react";
import Navbar from "../website/Navbar";
import MobileMenu from "../website/MobileMenu";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { RoleEnums } from "@/enums/role";

const WebsiteLayout = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const router = useRouter();

  useEffect(() => {
    if (session?.user.role === RoleEnums.EMPLOYER) {
      router.push("/dashboard");
    }
  }, [session]);

  return (
    <div className="w-full min-h-screen">
      <Navbar onMenuClick={toggleMenu} />

      <MobileMenu outsideOnClick={toggleMenu} show={isVisible} />

      <div className="mt-16">{props.children}</div>
    </div>
  );
};

export default WebsiteLayout;
