import React from 'react'
import FavouriteCard from './FavouriteCard'

const Favourite = () => {
  return (
    <>
    <div className='px-[5%] md:px-[10%] my-20'>
      <div className="text-3xl font-semibold py-6">All Time Favourite</div>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
        <FavouriteCard />
      </div>
    </div>
    </>
  )
}

export default Favourite