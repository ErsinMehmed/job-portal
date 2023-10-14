"use client";

const Alert = (props) => {
  return (
    <div
      className={`animate-slide-down absolute top-5 left-1/2 -translate-x-1/2 flex items-center p-4 mb-4 ${
        props.kind ? "text-red-600 bg-red-50" : "text-green-600 bg-green-50"
      }  rounded-lg `}>
      <div className='ml-3 mr-2 text-sm font-medium'>{props.message}</div>
      <button
        type='button'
        className={`ml-auto -mx-1.5 -my-1.5 ${
          props.kind
            ? "text-red-500 bg-red-50 hover:bg-red-200"
            : "text-green-500 bg-green-50 hover:bg-green-200"
        }   rounded-lg focus:ring-2  p-1.5  inline-flex items-center justify-center h-8 w-8`}
        data-dismiss-target='#alert-2'
        aria-label='Close'>
        <span className='sr-only'>Close</span>
        <svg
          className='w-3 h-3'
          aria-hidden='true'
          fill='none'
          viewBox='0 0 14 14'>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
          />
        </svg>
      </button>
    </div>
  );
};

export default Alert;
