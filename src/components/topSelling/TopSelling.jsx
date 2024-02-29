import React from 'react'
import TopSellingCard from './TopSellingCard'

const TopSelling = () => {
  return (
    <>
    <div className='px-[5%] md:px-[10%] my-20'>
      <div className="text-3xl font-semibold py-6">Top Selling</div>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
        <TopSellingCard />
      </div>
    </div>
    </>
  )
}

export default TopSelling