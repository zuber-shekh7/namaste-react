import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`bg-orange-600 px-2 text-white py-1 rounded-md hover:bg-orange-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
