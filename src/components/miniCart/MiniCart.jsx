import React from "react";
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingContext";
import { useTheme } from "../../context/ThemeContext";

const MiniCart = ({ setMiniCart }) => {
  const { cart, removeFromCart, clearCart } = useShoppingCart();
  const { isDarkMode } = useTheme();
  const backgroundColorClass = isDarkMode
    ? "bg-backgroundColor-dark"
    : "bg-backgroundColor-light";
    const textColorClass = isDarkMode
    ? "text-textColor-light"
    : "text-textColor-dark";

  const handleClearCart = () => {
    clearCart();
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const navigate = useNavigate();
  return (
    <>
      <div className={`${isDarkMode ? "bg-black" : "bg-gray-300"} w-[350px] md:w-[300px] p-3 flex flex-col gap-6`}>
        {cart.items.length >= 1 ? (
          <>
            <div className={`flex flex-col gap-4 p-2`}>
              <div className="cart-container flex flex-col gap-2 max-h-[200px] overflow-y-auto">
                {cart.items.map((item) => (
                  <div className={`${backgroundColorClass} ${textColorClass} flex justify-between items-start p-1 relative`}>
                    <img src={item.img} alt="" className="h-[50px] w-[50px]" />
                    <div className="flex flex-col gap-1">
                      <h4 className="truncate text-sm overflow-hidden whitespace-nowrap">
                        {item.title}
                      </h4>
                      <p>NPS. {item.price}</p>
                    </div>
                    <FaXmark
                      className="cursor-pointer"
                      onClick={() => handleRemoveFromCart(item.id)}
                    />
                    <p
                      className={`bg-red-600 rounded-full h-[22px] w-[22px] p-[3px] text-white absolute top-0 left-0 text-xs`}
                    >
                      {item.quantity}X
                    </p>
                  </div>
                ))}
              </div>
              <div className="font-normal">
                <div className="flex justify-between items-center">
                  <h5>Order Amount</h5>
                  <p>NRS. 999</p>
                </div>
                <div className="flex justify-between items-center">
                  <h5>Sub Total</h5>
                  <p>NRS. 999</p>
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="text-black">Total</h5>
                  <p>NRS. 999</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-4">
              <button
                className={`${ isDarkMode ? "bg-red-600" : "bg-black text-white" } w-full p-2 rounded-sm`}
                onClick={() => navigate("/cart")}
              >
                CART
              </button>
              <button className={`${ isDarkMode ? "bg-red-600" : "bg-black text-white" } w-full p-2 rounded-sm`}>
                CHECKOUT
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center gap-3 text-xl font-mono">
            <img src="/pizza-maker.png" alt="" />
            <p className=" border-[1px] border-red-600 rounded-sm p-2  text-red-600">
              Your Cart is Empty!
            </p>
          </div>
        )}
        <div
          className="bg-red-600 h-[30px] w-[30px] rounded-full flex justify-center items-center text-white absolute -right-3 -top-3 cursor-pointer"
          onClick={() => setMiniCart((prev) => !prev)}
        >
          <FaXmark />
        </div>
      </div>
    </>
  );
};

export default MiniCart;
