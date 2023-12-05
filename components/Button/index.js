import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes }) => {
  const { theme } = useTheme();

  // Common style for both light and dark modes
  const commonStyle = "text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:scale-105 active:scale-100 tablet:first:ml-0 link";

  return (
    <button
      onClick={onClick}
      type="button"
      className={`${commonStyle} ${
        theme === "dark"
          ? "bg-gray-700 text-white hover:bg-gray-800" // Style for dark mode
          : "bg-gray-200 text-black hover:bg-gray-300" // Style for light mode
      } ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;