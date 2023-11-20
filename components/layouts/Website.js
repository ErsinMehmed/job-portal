import React, { useState } from "react";
import Navbar from "../dashboard/Navbar";
import SideBar from "../dashboard/Sidebar";
import MobileMenu from "../dashboard/MobileMenu";
import { useSession } from "next-auth/react";
import { RoleEnums } from "../../enums/role";
import Image from "next/image";

const WebsiteLayout = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div classNameName="w-full">
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div classNameName="flex items-cneter space-x-5">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src={homeBannerImg}
                alt="Picture of the author"
                width={500}
                height={500}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Flowbite
              </span>
            </a>

            <div className="items-center justify-between hidden md:flex md:w-auto md:order-1">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-blue-500 bg-[#e2eaf8] hover:bg-blue-600 hover:text-white font-semibold focus:outline-none rounded-lg text-sm px-4 py-3 text-center transition-all active:scale-95"
            >
              Вход / Регистрация
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div classNameName="mt-16">{props.children}</div>
    </div>
  );
};

export default WebsiteLayout;
