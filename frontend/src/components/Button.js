import React from "react";

const Button = ({ name, icon, onClick, bg, bPad, color, bRad }) => {
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={onClick}
      >
        {icon}
        {name}
      </button>
    </div>
  );
};

export default Button;
