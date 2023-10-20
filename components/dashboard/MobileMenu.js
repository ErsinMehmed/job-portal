import { AiOutlineHome } from "react-icons/ai";

const MobileMenu = (props) => {
  return (
    <aside
      className={`fixed block sm:hidden top-[65px] left-0 z-40 ${
        props.show ? "w-full" : "w-0"
      } transition-all duration-500 h-screen sm:translate-x-0 bg-gradient-to-r from-[#534bed] via-[#4d44ef] to-[#4b43e7]`}>
      <div className='h-full px-3 py-4 overflow-y-auto'>
        <ul className='space-y-2 font-medium'>
          <li>
            <a
              href='#'
              className='flex items-center justify-center p-2 text-white rounded-lg font-semibold hover:bg-[#4338ca] group'>
              <AiOutlineHome className='w-5 h-5' />
              <span className='ml-3'>Начало</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default MobileMenu;
