import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Avatar } from "@nextui-org/react";
import { IoMenu } from "react-icons/io5";
import { FaXmark, FaRegCircleUser } from "react-icons/fa6";
import { homePageLinks } from "@/app/data";

const Navbar = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrollY > 100 ? "bg-white border-gray-200 border-b" : "bg-[#f3f7fd]"
      } fixed w-full z-20 top-0 start-0 `}>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
        <div className='flex items-center'>
          <div className='flex items-center space-x-3'>
            <Image
              src='/images/logo.svg'
              alt='Picture of the author'
              width={30}
              height={30}
            />

            <span className='self-center text-xl md:text-2xl font-semibold whitespace-nowrap lg:pr-6 xl:pr-12'>
              Job Portal
            </span>

            <div className='items-center justify-between hidden md:flex'>
              <ul className='flex space-x-2.5 lg:space-x-6 2xl:space-x-8'>
                {homePageLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className='px-3 xl:text-lg text-slate-700 font-semibold hover:text-blue-700'>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex space-x-3 items-center text-slate-600'>
          <Link
            href='/login'
            className='md:hidden'>
            <FaRegCircleUser className='w-6 h-6' />
          </Link>

          {session?.user ? (
            <div className='flex items-center'>
              <span className='hidden sm:block mr-3 text-slate-700 font-semibold'>
                {session?.user.name}
              </span>

              <button
                onClick={props.onMenuClick}
                type='button'>
                <Avatar
                  isBordered
                  size='sm'
                  as='button'
                  className='transition-transform'
                  src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                />
              </button>
            </div>
          ) : (
            <>
              <Link
                href='/login'
                className='hidden md:block text-blue-500 bg-[#e2eaf8] hover:bg-blue-600 hover:text-white font-semibold focus:outline-none rounded-lg text-sm px-4 py-[9px] text-center transition-all active:scale-95'>
                Вход
              </Link>

              <Link
                href='/register'
                className='hidden md:block text-white bg-blue-500 hover:bg-[#1967d2] hover:text-white font-semibold focus:outline-none rounded-lg text-sm px-4 py-[9px] text-center transition-all active:scale-95'>
                Създай профил
              </Link>

              <button
                onClick={props.onMenuClick}
                className='md:hidden p-2 mr-2 bg-gray-200 rounded-md cursor-pointer transition-all'>
                {props.show ? (
                  <FaXmark className='w-6 h-6 text-slate-600' />
                ) : (
                  <IoMenu className='w-6 h-6 text-slate-600' />
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
