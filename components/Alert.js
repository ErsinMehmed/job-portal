import { HiMiniXMark } from "react-icons/hi2";
import { commonStore } from "../stores/useStore";

const Alert = () => {
  const { setErrorMessage, setSuccessMessage, errorMessage, successMessage } =
    commonStore;

  const handleHideAlert = () => {
    setErrorMessage("");
    setSuccessMessage("");
  };

  return errorMessage || successMessage ? (
    <div
      className={`animate-slide-down absolute top-5 left-1/2 -translate-x-1/2 flex items-center p-4 mb-4 ${
        errorMessage ? "text-red-600 bg-red-50" : "text-green-600 bg-green-50"
      }  rounded-lg `}>
      <div className='ml-3 mr-2 text-sm font-medium'>
        {errorMessage || successMessage}
      </div>
      <button
        type='button'
        onClick={handleHideAlert}
        className={`ml-auto -mx-1.5 -my-1.5 ${
          errorMessage
            ? "text-red-500 bg-red-50 hover:bg-red-200"
            : "text-green-500 bg-green-50 hover:bg-green-200"
        }   rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 transition-all`}>
        <HiMiniXMark className='w-6 h-6' />
      </button>
    </div>
  ) : null;
};

export default Alert;
