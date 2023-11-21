import Link from "next/link";
import { homePageLinks } from "@/app/data";
import { IoIosArrowForward } from "react-icons/io";
import { usePathname } from "next/navigation";

const MobileMenu = (props) => {
  const pathname = usePathname();

  return (
    <aside
      onClick={props.outsideOnClick}
      className={`fixed top-0 left-0 z-30 ${
        props.show ? "w-full" : "w-0"
      } transition-all duration-500`}
      style={{
        background: `rgba(0, 0, 0, 0.05)`,
      }}>
      <div
        className={`${
          props.show ? "w-[60%] sm:w-[50%] md:w-[20%] 2xl:w-[15%]" : "w-0"
        } relative transition-all duration-500 h-screen sm:translate-x-0 bg-white border-r shadow-md`}>
        <div
          className='h-full py-4 overflow-y-auto z-40'
          onClick={(e) => e.stopPropagation()}>
          <ul className={`${!props.show && "hidden"} space-y-2 font-medium`}>
            {homePageLinks.map((item, index) => (
              <li
                key={index}
                className='py-2.5 hover:bg-gray-100 transition-all duration-500 px-3.5 '>
                <Link
                  className={`${
                    pathname === item.link ? "text-blue-600" : "text-slate-700"
                  } flex justify-between items-center w-full`}
                  href={item.link}>
                  {item.text}

                  <IoIosArrowForward />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default MobileMenu;
