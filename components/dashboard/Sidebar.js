"use client";

import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoDocumentsOutline } from "react-icons/io5";

const SideBar = (props) => {
  return (
    <aside
      className={`fixed hidden sm:block top-0 left-0 z-40 ${
        props.show ? "w-16" : "w-56 xl:w-64 2xl:w-72"
      } transition-all duration-500 h-screen sm:translate-x-0 bg-gradient-to-r from-[#534bed] via-[#4d44ef] to-[#4b43e7]`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto border-r border-gray-200">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center ${
                props.show && "justify-center"
              }  p-2 text-white rounded-lg font-semibold hover:bg-[#4338ca] group transition-all`}
            >
              <AiOutlineHome className="w-5 h-5" />
              <span className={`${props.show ? "hidden" : "block"} ml-3`}>
                Табло
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/ads"
              className={`flex items-center ${
                props.show && "justify-center"
              }  p-2 text-white rounded-lg font-semibold hover:bg-[#4338ca] group transition-all`}
            >
              <IoDocumentsOutline className="w-5 h-5" />
              <span className={`${props.show ? "hidden" : "block"} ml-3`}>
                Обяви
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
