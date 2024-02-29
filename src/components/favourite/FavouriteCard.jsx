import React, { useState } from 'react'
import { FavouriteData } from '../../data/kfcData'
import { BiCartAdd } from 'react-icons/bi';
import { useShoppingCart } from '../../context/ShoppingContext';
import { useTheme } from '../../context/ThemeContext';
import { ClockLoader } from 'react-spinners';

const FavouriteCard = () => {
  const { addToCart } = useShoppingCart();
  const { isDarkMode } = useTheme();
  const backgroundColorClass = isDarkMode
    ? "bg-backgroundColor-dark"
    : "bg-backgroundColor-light";
    const textColorClass = isDarkMode
    ? "text-textColor-light"
    : "text-textColor-dark";
  const [loadingItems, setLoadingItems] = useState([]);

  const handleAddToCart = (item) => {
    // Check if the item is not already loading
    if (!loadingItems.includes(item.id)) {
      // Set loading state for the current item
      setLoadingItems((prevLoadingItems) => [...prevLoadingItems, item.id]);

      setTimeout(() => {
        // Use the details of the current item to create the newItem
        const newItem = {
          id: item.id,
          title: item.title,
          price: item.price,
          desc: item.desc,
          img: item.img,
          type: item.type,
          quantity: 1,
        };

        // Add the newItem to the cart
        addToCart(newItem);

        // Reset loading state for the current item after the item has been added
        setLoadingItems((prevLoadingItems) =>
          prevLoadingItems.filter((id) => id !== item.id)
        );
      }, 1000);
    }
  };
  return (
    <>
    {
        FavouriteData.map((item) => {
            const { id, title, img, desc, type, price } = item;
            return(

    <div key={id} className={`${backgroundColorClass} ${textColorClass} p-3 rounded-md flex flex-col gap-3 border-[1px] border-transparent hover:border-red-600 ease-in-out duration-500`}>
        <div>
          <img src={img} alt="" />
          <div className='flex justify-start items-center gap-3'>
            <div className={`${type == "nonveg" ?  "border-red-600" : "border-green-500"} border-[2px] flex items-center justify-center p-1`}>
                <div className={`${type == "nonveg" ?  "bg-red-600" : "bg-green-500"} h-[5px] w-[5px] rounded-full`}></div>
            </div>
            <h2 className='font-semibold'>{title}</h2>
          </div>
        </div>
        <p className='font-normal text-sm'>{desc}</p>
        <div className='flex justify-between items-center'>
            <h5 className='font-bold'>NRS.{price}</h5>
            <div className='flex items-center gap-2 border-[1px] border-red-600 p-2 text-red-600 rounded-md cursor-pointer'>
            {loadingItems.includes(item.id) ? (
                   <ClockLoader size={20} color={'#ff0000'} loading={true} />
                ) : (
                  <>
                    <BiCartAdd className="font-semibold" />
                  </>
                )}
                <p className='font-semibold' onClick={() => handleAddToCart(item)}>Add to Cart</p>
            </div>
        </div>
    </div>
            )
        })
    }
    </>
  )
}

export default FavouriteCard