import React from 'react';
import { LocationItems, MenuItems } from '../../data/kfcData';
import { useMenu } from '../../context/MenuFilterContext';
import { useTheme } from '../../context/ThemeContext';

const LocationList = () => {
  const { isDarkMode } = useTheme();
  const backgroundColorClass = isDarkMode
    ? "bg-backgroundColor-dark"
    : "bg-backgroundColor-light";
  const textColorClass = isDarkMode
    ? "text-textColor-light"
    : "text-textColor-dark";

  return (
    <div className={`${backgroundColorClass} ${textColorClass} location flex flex-col gap-6 h-[500px] overflow-y-auto justify-start items-start p-4 md:w-1/3 w-full ease-in-out duration-500`}>
      <p className='text-2xl font-semibold'>Outlets(10)</p>
      <div className='flex flex-col gap-5'>
        {LocationItems.map((item, id) => (
          <div key={id} className="flex flex-col gap-1">
            <p className={`w-full text-xl font-semibold`}>
              {item.title}
            </p>
            <p className={`w-full text-md font-semibold text-gray-600`}>
              {item.address}
            </p>
            <p className={`w-full text-sm text-gray-500`}>
              {item.timing}
            </p>
            <p className={`w-full text-sm text-gray-500`}>
              {item.phone}
            </p>
          </div>
        ))}
        </div>
    </div>
  );
};

export default LocationList;
