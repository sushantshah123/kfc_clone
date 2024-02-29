import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import LocationList from '../../components/locationItem/LocationList'
import LocationMap from '../../components/locationItem/LocationMap'

const Location = () => {
  return (
    <>
    <Navbar />
    <div className='px-[5%] md:px-[10%] my-20 flex flex-col gap-4 md:flex-row'>
    <LocationList />
    <LocationMap />
    </div>
    <Footer />
    </>
  )
}

export default Location