import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMiniXMark } from "react-icons/hi2";

function Filter(props) {
  return (
    <AnimatePresence>
      {props.show && (
        <motion.div
          className="bg-white rounded-lg shadow border border-gray-100 w-full"
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-between border-b-2 border-ray-300 text-slate-700">
            <div className="p-4 text-lg font-semibold leading-tight">
              Подробно търсене
            </div>

            <button
              onClick={props.close}
              className="m-4 transition-all active:scale-90 hover:text-slate-500"
            >
              <HiMiniXMark className="w-6 h-6 stroke-1" />
            </button>
          </div>
          <div>ersin</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Filter;
