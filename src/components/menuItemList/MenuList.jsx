import React from "react";
import { MenuItems } from "../../data/kfcData";
import { useMenu } from "../../context/MenuFilterContext";
import { useTheme } from "../../context/ThemeContext";

const MenuList = () => {
  const { toggleMenu, menuFilter } = useMenu();
  const { isDarkMode } = useTheme();
  const backgroundColorClass = isDarkMode
    ? "bg-backgroundColor-dark"
    : "bg-backgroundColor-light";
  const textColorClass = isDarkMode
    ? "text-textColor-light"
    : "text-textColor-dark";
  return (
    <div
      className={`${backgroundColorClass} ${textColorClass}flex flex-row flex-wrap md:flex-col gap-4 justify-start items-start p-3 md:w-1/4 w-full ease-in-out duration-500`}
    >
      {MenuItems.map((item) => (
        <div
          key={item.id}
          className={`${
            menuFilter === item.title ? "bg-red-600 text-white" : ""
          } text-md md:w-full p-2 rounded-md text-2xl font-semibold cursor-pointer`}
          onClick={() => {
            toggleMenu(item.title);
          }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default MenuList;
