import React, { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { commonStore } from "../stores/useStore";

const Alert = () => {
  const { setErrorMessage, setSuccessMessage, errorMessage, successMessage } =
    commonStore;

  const handleHideAlert = useCallback(() => {
    setErrorMessage("");
    setSuccessMessage("");
  }, [setErrorMessage, setSuccessMessage]);

  useEffect(() => {
    if (errorMessage || successMessage) {
      const timeoutId = setTimeout(() => {
        handleHideAlert();
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [errorMessage, successMessage, handleHideAlert]);

  return (
    errorMessage ||
    (successMessage && (
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 flex justify-center items-center w-96 py-4 mb-4 z-50 ${
          errorMessage
            ? "text-red-600 bg-red-100"
            : "text-green-600 bg-green-100 "
        }  rounded-lg font-medium`}>
        {errorMessage || successMessage}
      </motion.div>
    ))
  );
};

export default Alert;
