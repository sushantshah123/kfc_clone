import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSlider from '../../components/heroSlider/HeroSlider'
import MenuSlider from '../../components/menuSlider/MenuSlider'
import TopSelling from '../../components/topSelling/TopSelling'
import Favourite from '../../components/favourite/Favourite'
import Footer from '../../components/footer/Footer'
import RegisterForm from '../../components/form/RegisterForm'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSlider />
        <MenuSlider />
        <TopSelling />
        <Favourite />
        <RegisterForm />
        <Footer />
    </div>
  )
}

export default Home