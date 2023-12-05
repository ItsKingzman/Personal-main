import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes }) => {
  const { theme } = useTheme();

  const buttonClass = `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:scale-105 active:scale-100 tablet:first:ml-0 ${
    data.showCursor && "cursor-none"
  } ${classes} link`;

  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`${buttonClass} ${
          theme === "dark"
            ? "bg-blue-500 text-white hover:bg-blue-600" // Dark mode: Blue background, white text
            : "bg-green-300 text-black hover:bg-green-400" // Light mode: Green background, black text
        }`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={`${buttonClass} ${
        theme === "dark"
          ? "text-white hover:bg-gray-700" // Dark mode: White text, dark hover background
          : "text-black hover:bg-gray-200" // Light mode: Black text, light hover background
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

