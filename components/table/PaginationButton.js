import React from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const PaginationButton = (props) => {
  return (
    <button
      className={`flex rounded-lg items-center justify-center px-3.5 ${
        props.dotsButton && "hover:px-2"
      }  h-9 leading-tight group ${
        props.check
          ? "text-blue-400 bg-[#ebf4ff]"
          : "bg-[#f4f4f5] hover:bg-[#e6e6e7] text-gray-500 transition-all"
      }`}
      onClick={props.onClick}>
      {props.dotsButton ? (
        <>
          <span className='group-hover:hidden'>...</span>

          <span className='hidden group-hover:block'>
            {props.dotsButton === "right" ? (
              <MdOutlineKeyboardDoubleArrowRight className='ml-0.5 h-5 w-5' />
            ) : (
              <MdOutlineKeyboardDoubleArrowLeft className='mr-0.5 h-5 w-5' />
            )}
          </span>
        </>
      ) : (
        props.text
      )}
    </button>
  );
};

export default PaginationButton;
