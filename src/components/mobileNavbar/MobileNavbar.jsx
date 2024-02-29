import React, { useState } from "react";
import { FaRegCircleUser, FaXmark } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import RegisterForm from "../form/RegisterForm";
import LoginForm from "../form/LoginForm";
import { useNavigate } from "react-router-dom";

const MobileNavbar = ({ toggleMenu, setToggleMenu }) => {
    const navigate = useNavigate()
    const [toggleRegister, setToggleRegister] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);
  const handleRegisterToggle = () => {
    setToggleRegister((prevState) => !prevState);
    document.body.classList.toggle("overflow-hidden", toggleRegister);
  };
  const handleLoginToggle = () => {
    setToggleLogin((prevState) => !prevState);
    document.body.classList.toggle("overflow-hidden", toggleLogin);
  };
  const { isDarkMode } = useTheme();
  const backgroundColorClass = isDarkMode
    ? "bg-backgroundColor-dark"
    : "bg-backgroundColor-light";
  const textColorClass = isDarkMode
    ? "text-textColor-light"
    : "text-textColor-dark";

  return (
    toggleMenu && (
      <div className="w-screen h-screen bg-opacity-70 z-50 fixed top-0 bottom-0 left-0 bg-black overflow-auto md:hidden">
        <div
          className={` ${backgroundColorClass} ${textColorClass} w-2/3 h-auto absolute top-0 left-0 bottom-0`}
        >
          <div className="p-6 rounded-md z-50 overflow-y-auto flex flex-col gap-8">
            <div className="p-2 rounded-md bg-red-600 text-white flex items-center gap-1">
              <MdOutlineLocationOn className="font-normal text-[20px] text-white" />
              <input
                type="text"
                placeholder="Kathmandu"
                className="bg-transparent outline-none"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
              <p className="font-medium text-sm" onClick={()=> navigate("/")}>Home</p>
              <hr className="w-full bg-red-600" />
              <p className="font-medium text-sm" onClick={()=> navigate("/menu")}>Menu</p>
              <hr className="w-full bg-red-600" />
              <p className="font-medium text-sm" onClick={()=> navigate("/location")}>Nearby Location</p>
              <hr className="w-full bg-red-600" />
              <p className="font-medium text-sm">New Outlet</p>
              <hr className="w-full bg-red-600" />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <p>My Account</p>
              <div className="flex justify-center items-center gap-2">
                <BiSolidOffer fontSize={20}/>
                <p>Offer</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <FaRegCircleUser fontSize={20}/>
                <p onClick={handleLoginToggle}>Login</p>
                <div>/</div>
                <p onClick={handleRegisterToggle}>Register</p>
              </div>
              {toggleRegister && (
        <RegisterForm
          setToggleRegister={setToggleRegister}
          toggleRegister={toggleRegister}
        />
      )}
      {toggleLogin && (
        <LoginForm setToggleLogin={setToggleLogin} toggleLogin={toggleLogin} />
      )}
            </div>
          </div>
          <FaXmark
            onClick={() => setToggleMenu((prev) => !prev)}
            className="cursor-pointer absolute top-0 -right-[35px] h-[35px] w-[35px] p-2 font-light text-sm bg-red-600 text-white"
          />
        </div>
      </div>
    )
  );
};

export default MobileNavbar;
