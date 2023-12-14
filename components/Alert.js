import React, { useEffect } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { commonStore } from "../stores/useStore";

const Alert = () => {
  const { setErrorMessage, setSuccessMessage, errorMessage, successMessage } =
    commonStore;

  const handleHideAlert = () => {
    setErrorMessage("");
    setSuccessMessage("");
  };

  useEffect(() => {
    if (errorMessage || successMessage) {
      const timeoutId = setTimeout(() => {
        handleHideAlert();
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [errorMessage, successMessage]);

  return errorMessage || successMessage ? (
    <div
      className={`animate-slide-down absolute top-5 left-1/2 -translate-x-1/2 flex justify-center items-center w-96 py-4 mb-4 z-50 ${
        errorMessage
          ? "text-red-600 bg-red-100"
          : "text-green-600 bg-green-100 "
      }  rounded-lg font-medium`}
    >
      {errorMessage || successMessage}
    </div>
  ) : null;
};

export default Alert;
