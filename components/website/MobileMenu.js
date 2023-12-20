import Link from "next/link";
import { homePageLinks, homePageAuthLinks } from "@/app/data";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineXMark } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaViber,
} from "react-icons/fa";
import { signOut } from "next-auth/react";
import Image from "next/image";

const MobileMenu = (props) => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <aside
      onClick={props.outsideOnClick}
      className={`fixed top-0 left-0 z-30 ${
        props.show ? "w-full" : "w-0"
      } transition-all duration-500`}
      style={{
        background: `rgba(0, 0, 0, 0.5)`,
      }}
    >
      <div
        className={`${
          props.show ? "w-[16rem] sm:w-[20rem] md:w-80" : "w-0"
        } relative transition-all duration-500 h-screen sm:translate-x-0 bg-white border-r shadow-lg`}
      >
        <div
          className="h-full py-4 overflow-y-auto z-40"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-3.5 flex items-center justify-between py-4 border-b">
            <div className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Picture of the author"
                width={45}
                height={45}
              />

              <span className="text-xl sm:text-2xl font-bold text-slate-700 ml-2 sm:ml-2.5">
                Job Portal
              </span>
            </div>

            <button
              onClick={props.outsideOnClick}
              className="p-1 sm:p-1.5 rounded-full border border-gray-500 transition-all hover:bg-gray-100 hover:border-gray-100"
            >
              <HiOutlineXMark className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <ul className={`${!props.show && "hidden"} space-y-2 font-medium`}>
            {homePageLinks.map((item, index) => (
              <li
                key={index}
                className={`${
                  index === 0 && "mt-2.5"
                } py-2.5 md:hidden hover:bg-gray-100 transition-all duration-500 px-3.5`}
              >
                <Link
                  className={`${
                    pathname === item.link ? "text-[#1967d2]" : "text-slate-700"
                  } flex justify-between items-center w-full`}
                  href={item.link}
                >
                  {item.text}

                  <IoIosArrowForward />
                </Link>
              </li>
            ))}

            {session?.user &&
              homePageAuthLinks.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    index === 0 && "mt-2.5 border-t-2 md:border-0"
                  } py-2.5 hover:bg-gray-100 transition-all duration-500 px-3.5`}
                >
                  <Link
                    className={`${
                      pathname === item.link
                        ? "text-blue-600"
                        : "text-slate-700"
                    } flex justify-between items-center w-full`}
                    href={item.link}
                  >
                    {item.text}

                    <IoIosArrowForward />
                  </Link>
                </li>
              ))}

            {session?.user ? (
              <li className="py-2.5 px-3.5">
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="w-full justify-center text-blue-500 bg-[#e2eaf8] hover:bg-blue-600 hover:text-white font-semibold focus:outline-none rounded-lg py-3 transition-all active:scale-95"
                >
                  Изход
                </button>
              </li>
            ) : (
              <>
                <li className="py-2.5 px-3.5">
                  <Link
                    href="/login"
                    className="md:hidden flex justify-center text-blue-500 bg-[#e2eaf8] hover:bg-blue-600 hover:text-white font-semibold focus:outline-none rounded-lg py-3 transition-all active:scale-95"
                  >
                    Вход
                  </Link>
                </li>

                <li className="px-3.5">
                  <Link
                    href="/register"
                    className="flex justify-center text-white bg-blue-500 hover:bg-[#1967d2] hover:text-white font-semibold focus:outline-none rounded-lg py-3 transition-all active:scale-95"
                  >
                    Създай профил
                  </Link>
                </li>
              </>
            )}
          </ul>

          <div className="text-[#7e7e7e] font-semibold px-3.5 pt-2">
            Контакти
          </div>

          <div className="text-[#555] text-xl font-semibold px-3.5 tracking-wider">
            <a href="tel:1234567890">123 456 7890</a>
          </div>

          <div className="text-[#7e7e7e] text-sm px-3.5 pt-6">
            Ул. Драгомир Фалцов 87, Ж.К. Надежда
          </div>

          <div className="text-[#7e7e7e] text-sm px-3.5 pt-1">5000, София</div>

          <div className="text-[#7e7e7e] text-sm px-3.5 pt-2.5 font-semibold">
            <a href="mailto:support@jobportal.com">support@jobportal.com</a>
          </div>

          <div className="flex items-center gap-x-2.5 px-3.5 pt-3">
            <a href="https://www.facebook.com" target="blank">
              <FaFacebookSquare className="text-[#4267B2] w-6 h-6" />
            </a>

            <a href="https://twitter.com/?lang=en" target="blank">
              <FaTwitter className="text-[#1DA1F2] w-6 h-6" />
            </a>

            <a href="https://www.instagram.com" target="blank">
              <FaInstagram className="text-[#C13584] w-6 h-6" />
            </a>

            <a href="https://www.viber.com/en/" target="blank">
              <FaViber className="text-[#8f5db7] w-6 h-6" />
            </a>
          </div>

          <div className="px-3.5 rounded-md mt-3.5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.4036269572575!2d23.3293523!3d42.6951736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856e1dfbc955%3A0xa34f77d80f5da03a!2zdWxpdHNhIOKAnkdlb3JnaSBTLiBSYWtvdnNraeKAnCwgU29maWE!5e0!3m2!1sen!2sbg!4v1703052947960!5m2!1sen!2sbg"
              width="100%"
              height="280"
              style={{
                border: "2px solid #E5E4E2",
                borderRadius: "14px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MobileMenu;
