import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const backgroundColorClass = isDarkMode
    ? "bg-backgroundColor-dark"
    : "bg-backgroundColor-light";
    const textColorClass = isDarkMode
    ? "text-textColor-light"
    : "text-textColor-dark";
  return (
    <>
      <div
        className={`${backgroundColorClass} ${textColorClass} px-[5%] md:px-[10%]  py-4 md:p-6 font-semibold flex items-center flex-col gap-6`}>
          <img
              src="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png"
              alt="Logo"
              height={80}
              width={80}
            />
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Disclaimer</p>
            <p className="cursor-pointer">Terms & Conditions</p>
            <p className="cursor-pointer">FAQs</p>
            <p className="cursor-pointer">Feedback</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <BsFacebook size={20}/>
            <BsInstagram size={20}/>
          </div>
      </div>
    </>
  );
};

export default Footer;
