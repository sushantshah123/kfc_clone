import React, { useEffect, useState } from "react";
const items = [
  {id:1,img:"./heroSliderImage/slide1.jpg"},
  {id:2,img:"./heroSliderImage/slide2.jpg"},
  {id:3,img:"./heroSliderImage/slide3.jpg"},
  {id:3,img:"./heroSliderImage/slide4.jpg"},
  {id:3,img:"./heroSliderImage/slide5.jpg"},
];

const HeroSlider = () => {
  const [slideItem, setSlideItem] = useState(0)
  useEffect(() => {
    setTimeout(() => {
       setSlideItem((prev) => prev === items.length-1 ? 0 : prev+1)
    },3000)
  },[slideItem])
  return (
    <>
      <div className="md:h-[calc(100vh-10rem)] h-[50vh]">
          <img
            src={items[slideItem].img}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
    </>
  );
};

export default HeroSlider;
