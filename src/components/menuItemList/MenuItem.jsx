import React from 'react'
import MenuItemCard from './MenuItemCard'
import { useTheme } from '../../context/ThemeContext';

const MenuItem = () => {
  const { isDarkMode } = useTheme();
  const backgroundColorClass = isDarkMode
    ? "bg-backgroundColor-dark"
    : "bg-backgroundColor-light";
    const textColorClass = isDarkMode
    ? "text-textColor-light"
    : "text-textColor-dark";
  return (
    <>
    <div className={`${ isDarkMode ? "bg-black" : null }w-full md:w-3/4 p-3 flex flex-col gap-4`}>
      <div className="text-3xl font-semibold">Menu Item</div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
          <MenuItemCard />
      </div>
    </div>
    </>
  )
}

export default MenuItem