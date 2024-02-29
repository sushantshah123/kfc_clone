import React, { useEffect } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useShoppingCart } from "../../context/ShoppingContext";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { MdDeleteSweep, MdFolderDelete } from "react-icons/md";

const CartItem = () => {
  const navigate = useNavigate()
  const { isDarkMode } = useTheme();
  const backgroundColorClass = isDarkMode
    ? "bg-backgroundColor-dark"
    : "bg-backgroundColor-light";
    const textColorClass = isDarkMode
    ? "text-textColor-light"
    : "text-textColor-dark";
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useShoppingCart();

  const handleClearCart = () => {
    console.log("Clearing cart...");
    clearCart();
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };

  // Calculate the total amount
  const totalAmount = cart.items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <>
      <div className="px-[5%] md:px-[10%] my-8">
        <div className="text-3xl font-semibold py-6">CART</div>
        {cart.items.length > 0 ? (
          <>
            <div className={`flex flex-col md:flex-row gap-4`}>
              {/* LEFT PART START  */}
              <div className={` ${backgroundColorClass} ${textColorClass} md:w-2/3 rounded-sm p-3 flex flex-col gap-2 flex-shrink ease-in-out duration-500`}>
                <div className="flex justify-between items-center text-xl md:text-2xl font-medium">
                  <h5>Your Bucket</h5>
                  <h5>{cart.items.length} Items</h5>
                </div>
                <hr className="my-2" />
                <div className="justify-between items-center pt-2 hidden md:flex">
                  <div className="w-2/5 flex justify-start">
                    PRODUCT DETAILS
                  </div>
                  <div className="w-1/5 flex justify-center">ITEM PRICE</div>
                  <div className="w-1/5 flex justify-center">ITEM QUANTITY</div>
                  <div className="w-1/5 flex justify-end">SUBTOTAL</div>
                </div>
                <div className="flex flex-col pt-2">
                  {cart.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col md:flex-row justify-between items-center mb-2"
                    >
                      <div className="md:w-2/5 flex justify-start items-center gap-2 relative">
                        <img
                          src={item.img}
                          alt=""
                          className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]"
                        />
                        <h4 className="truncate text-sm md:text-base">
                          {item.title}
                        </h4>
                   <p onClick={()=> handleRemoveFromCart(item.id)}
                      className={`bg-red-600 rounded-full h-[22px] w-[22px] p-[3px] text-white absolute top-0 left-0 flex justify-center items-center text-xs cursor-pointer`}
                    >
                      X
                    </p>
                      </div>
                      <div className="md:w-1/5 flex justify-center">
                        NPS. {item.price}
                      </div>
                      <div className="md:w-1/5 flex justify-between items-center border-[1px] border-red-600 p-1 rounded-md text-base md:text-xl text-red-600">
                        <BiPlus
                          onClick={() =>handleIncreaseQuantity(item.id)}
                          className="cursor-pointer"
                        />
                        <p className="mx-2">{item.quantity}</p>
                        <BiMinus
                          onClick={() => handleDecreaseQuantity(item.id)}
                          className="cursor-pointer"
                        />
                      </div>
                      <div className="md:w-1/5 flex justify-end">
                        NRS. {item.quantity * item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* LEFT PART END  */}

              {/* RIGHT PART START  */}
              <div className={` ${backgroundColorClass} ${textColorClass} md:w-1/3 rounded-sm p-3 flex flex-col gap-2 h-[250px] ease-in-out duration-500`}>
                <h5 className="text-2xl font-medium">Order Summary</h5>
                <div className="flex justify-between items-center">
                  <h4>Item Total</h4>
                  <h4 className="font-bold">NRS. {totalAmount}</h4>
                </div>
                <div className="border-[1px] border-gray-700 rounded-lg p-2 flex justify-between items-center">
                  <input
                    type="text"
                    placeholder="Enter Code"
                    className="bg-transparent outline-none"
                  />
                  <h4 className="text-lg text-orange-500">Apply</h4>
                </div>
                <div className="flex justify-between items-center">
                  <h4>Sub Total</h4>
                  <h4 className="font-bold">NRS. {totalAmount}</h4>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="font-bold">Total</h4>
                  <h4 className="font-bold">NRS.{totalAmount}</h4>
                </div>
              </div>
              {/* RIGHT PART END  */}
            </div>
            <button
              className="bg-red-600 p-2 text-xl rounded-sm text-white mt-3"
              onClick={handleClearCart}
            >
              CLEAR CART
            </button>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center gap-4 text-xl font-mono my-5">
            <img src="/pizza-delivery.png" alt="" className="w-1/3 md:w-1/4" />
            <p className="rounded-sm p-2  text-red-600">
              Your Cart is Empty!
            </p>
            <p className="rounded-md p-3 bg-red-600 text-white cursor-pointer" onClick={()=>navigate("/")}>Back to Home Page</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartItem;
