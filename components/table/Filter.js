import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Filter(props) {
  return (
    <AnimatePresence>
      {props.show && (
        <motion.div
          className="bg-white rounded-lg shadow border-gray-100 w-full"
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
          <div className="p-4 border">ersin ersin</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Filter;
