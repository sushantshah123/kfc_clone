import React from 'react'
import { useNavigate } from 'react-router-dom';

const SliderCard = ({ key, title, img }) => {
  const navigate = useNavigate()
  return (
    <>
      <div key={key}
      onClick={() => navigate("/menu")}
        className='w-full h-full hover:bg-gray-400 ease-in-out duration-200 p-3 flex flex-col justify-center items-center cursor-pointer'
      >
        <img className='h-full bg-cover bg-center' src={img} alt="" />
        <div className=' text-2xl font-semibold font-mono'>{title}</div>
      </div>
    </>
  );
};

export default SliderCard;




