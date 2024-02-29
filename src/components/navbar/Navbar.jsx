import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsMoonFill, BsMoonStarsFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniXMark } from "react-icons/hi2";
import { useTheme } from "../../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import MiniCart from "../miniCart/MiniCart";
import { MdOutlineLocationOn } from "react-icons/md";
import RegisterForm from "../form/RegisterForm";
import LoginForm from "../form/LoginForm";
import { useShoppingCart } from "../../context/ShoppingContext";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useShoppingCart();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleRegister, setToggleRegister] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);
  const [searchIcon, setSearchIcon] = useState(false);
  const [miniCart, setMiniCart] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const backgroundColorClass = isDarkMode
    ? "bg-backgroundColor-dark"
    : "bg-backgroundColor-light";
  const textColorClass = isDarkMode
    ? "text-textColor-light"
    : "text-textColor-dark";
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);
  const iconStyle = "text-[25px] font-semibold cursor-pointer";
  const handleRegisterToggle = () => {
    setToggleRegister((prevState) => !prevState);
    document.body.classList.toggle("overflow-hidden", toggleRegister);
  };
  const handleLoginToggle = () => {
    setToggleLogin((prevState) => !prevState);
    document.body.classList.toggle("overflow-hidden", toggleLogin);
  };
  const handleActiveNavlist = (active) => {
    setActiveNavlist(active);
  };
  return (
    <nav
      className={`${backgroundColorClass} ${textColorClass} px-[5%] md:px-[10%] py-4 font-semibold sticky top-0 z-40`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* left  */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <div className="w-[70px] cursor-pointer">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png"
                alt="Logo"
              />
            </div>
          </Link>
          <div className="p-2 rounded-full bg-gray-200 md:flex items-center gap-1 hidden">
            <MdOutlineLocationOn className="font-normal text-[20px] text-red-500" />
            <input
              type="text"
              placeholder="Kathmandu"
              className="bg-transparent outline-none"
            />
          </div>
        </div>
        {/* middle */}
        <div className={`space-x-6 lg:flex hidden`}>
          <Link to="/" className={`${""} cursor-pointer`}>
            Home
          </Link>
          <Link to="/menu" className={`${""} cursor-pointer`}>
            Menu
          </Link>
          <Link to="/location" className={`${""} cursor-pointer`}>
            Nearby Location
          </Link>
        </div>
        {/* right */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <CiSearch
              className={`${iconStyle} hidden md:flex`}
              onClick={() => setSearchIcon((prev) => !prev)}
            />
            {searchIcon && (
              <div
                className={`h-[45px] md:w-[300px] w-[250px] overflow-hidden rounded-full bg-gray-200 gap-1 absolute md:right-8 right-0 top-[60px]`}
              >
                <div className="h-full flex justify-center items-center w-5/6">
                  <input
                    type="text"
                    placeholder="Search Product ..."
                    className="bg-transparent outline-none"
                  />
                </div>
                <div className="h-full w-1/6 bg-red-600 flex justify-center items-center">
                  <CiSearch
                    className={`${iconStyle} font-normal text-[20px] text-black`}
                  />
                </div>
              </div>
            )}
          </div>
          <div
            className={`${textColorClass}items-center gap-2 md:flex hidden cursor-pointer`}
            onClick={() => navigate("/offer")}
          >
            <BiSolidOffer className={`${iconStyle}`} />
            <h3>Offer</h3>
          </div>
          <div className="items-center gap-2 md:flex hidden">
            <div
              className={`flex items-center gap-2 cursor-pointer`}
              onClick={handleLoginToggle}
            >
              <FaRegCircleUser
                className={`${iconStyle}`}
                onClick={() => handleActiveNavlist("login")}
              />
              <h3 className="cursor-pointer">Login</h3>
            </div>
            /
            <h3 className="cursor-pointer" onClick={handleRegisterToggle}>
              Register
            </h3>
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onClick={() => setMiniCart((prev) => !prev)}
          >
            <img src="cart.png" alt="" className="h-[25px]" />
            <div className="absolute -top-2 left-4 text-white border-[2px] bg-gray-900 h-[20px] w-[20px] flex justify-center items-center rounded-full p-1">
              {cart.items.length}
            </div>
          </div>
          <div
            className="md:hidden"
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            <RxHamburgerMenu className={` ${iconStyle}`} />
          </div>
          {toggleMenu && (
            <MobileNavbar
              toggleMenu={toggleMenu}
              setToggleMenu={setToggleMenu}
            />
          )}
        </div>
      </div>
      <div
        className={`${iconStyle} fixed left-4 bottom-4 flex bg-gray-300 text-gray-800 p-3 rounded-full`}
        onClick={toggleTheme}
      >
        {isDarkMode ? <MdOutlineWbSunny /> : <BsMoonFill />}
      </div>
      {miniCart ? (
        <div className="absolute md:right-16 right-4 top-20">
          <MiniCart setMiniCart={setMiniCart} />
        </div>
      ) : (
        ""
      )}
      {toggleRegister && (
        <RegisterForm
          setToggleRegister={setToggleRegister}
          toggleRegister={toggleRegister}
        />
      )}
      {toggleLogin && (
        <LoginForm setToggleLogin={setToggleLogin} toggleLogin={toggleLogin} />
      )}
    </nav>
  );
};

export default Navbar;
