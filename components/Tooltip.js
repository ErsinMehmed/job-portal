import React, { useState, useEffect, useRef } from "react";

const Tooltip = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const getTooltipPosition = () => {
    switch (props.position) {
      case "top":
        return "bottom-10 left-1/2 transform -translate-x-1/2";
      case "bottom":
        return "top-10 left-1/2 transform -translate-x-1/2";
      case "left":
        return "top-1/2 right-10 transform -translate-y-1/2";
      case "right":
        return "top-1/2 left-10 transform -translate-y-1/2";
      default:
        return "bottom-10 left-1/2 transform -translate-x-1/2";
    }
  };

  return (
    <div className="relative inline-block" ref={tooltipRef}>
      <div onClick={handleToggle} className="cursor-pointer">
        {props.buttonChild}
      </div>
      {isVisible && (
        <div
          className={`absolute bg-white w-72 xl:w-80 text-white p-2.5 rounded-xl shadow-lg border border-slate-100 ${getTooltipPosition()}`}
        >
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
