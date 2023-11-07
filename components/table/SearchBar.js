import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Select = (props) => {
  return props.isLoading ? (
    <div className="h-14 w-full bg-white px-4 rounded-lg mb-6 flex items-center border border-gray-300">
      <div className="w-6 mr-4">
        <div className="h-1 animate-pulse bg-gray-200 rounded-full w-10/12 mb-2"></div>
        <div className="h-1 animate-pulse bg-gray-200 rounded-full"></div>
      </div>

      <div className="w-full">
        <div className="h-1 animate-pulse bg-gray-200 rounded-full w-10/12 mb-2"></div>
        <div className="h-1 animate-pulse bg-gray-200 rounded-full"></div>
      </div>

      <div className="w-full bg-[#f4f4f5] rounded-full w-1/6 2xl:w-[9%] ml-5 px-5 py-3">
        <div className="h-1 animate-pulse bg-gray-200 rounded-full w-10/12 mb-2"></div>
        <div className="h-1 animate-pulse bg-gray-200 rounded-full"></div>
      </div>
    </div>
  ) : (
    <div class="relative mb-6">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        <HiOutlineMagnifyingGlass className="h-6 w-6 mt-0.5 text-gray-400" />
      </div>
      <input
        type="text"
        class="bg-white border border-gray-300 focus:border-gray-400 text-gray-900 focus:outline-none focus:ring-0 rounded-lg block w-full pl-12 h-14"
        placeholder={`Въведи ${props.placeholder}`}
      />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3.5">
        <button
          type="button"
          class="text-white bg-[#0071f5] hover:bg-blue-600 focus:outline-none font-semibold rounded-full text-sm px-6 py-2.5 text-center transition-all"
        >
          {props.text}
        </button>
      </div>
    </div>
  );
};

export default Select;
