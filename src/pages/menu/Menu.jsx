import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import MenuList from '../../components/menuItemList/MenuList'
import MenuItem from '../../components/menuItemList/MenuItem'

const Menu = () => {
  return (
    <>
    <Navbar />
    <div className='px-[5%] md:px-[10%] my-20 flex flex-col gap-4 md:flex-row'>
    <MenuList />
    <MenuItem />
    </div>
    <Footer />
    </>
  )
}

export default Menu