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
        return `bottom-${
          props.space ?? 10
        } left-1/2 transform -translate-x-1/2`;
      case "bottom":
        return `top-${props.space ?? 10} left-1/2 transform -translate-x-1/2`;
      case "left":
        return `top-1/2 right-${props.space ?? 10} transform -translate-y-1/2`;
      case "right":
        return `top-1/2 left-${props.space ?? 10} transform -translate-y-1/2`;
      default:
        return `bottom-${
          props.space ?? 10
        } left-1/2 transform -translate-x-1/2`;
    }
  };

  return (
    <div
      className={`relative inline-block ${props.buttonWidth ?? ""}`}
      ref={tooltipRef}
    >
      <div onClick={handleToggle} className="cursor-pointer w-full z-0">
        {props.buttonChild}
      </div>
      {isVisible && (
        <div
          className={`absolute bg-white z-10 ${
            props.width ?? "w-72 xl:w-80"
          } text-white p-2.5 rounded-xl shadow-lg border border-slate-200 ${getTooltipPosition()}`}
        >
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
