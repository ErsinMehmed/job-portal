import { AiOutlineHome } from "react-icons/ai";

const SideBar = () => {
  return (
    <aside className='fixed top-[65px] left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0'>
      <div className='h-full px-3 py-4 overflow-y-auto border-r border-gray-200'>
        <ul className='space-y-2 font-medium'>
          <li>
            <a
              href='#'
              className='flex items-center p-2 text-gray-800 rounded-lg font-semibold hover:bg-gray-50 group'>
              <AiOutlineHome className='text-gray-500 w-5 h-5' />
              <span className='ml-3'>Начало</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
