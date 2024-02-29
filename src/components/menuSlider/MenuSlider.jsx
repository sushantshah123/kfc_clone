import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { MenuItems } from "../../data/kfcData";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-5 rounded-full bg-red-600 text-xl z-30 text-white top-1/2 cursor-pointer p-2"
    >
      <AiOutlineArrowLeft />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-5 rounded-full bg-red-600 text-xl z-30 text-white top-1/2 cursor-pointer p-2"
    >
      <AiOutlineArrowRight />
    </div>
  );
};

const MenuSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      // Add more breakpoints if necessary
    ],
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="px-[5%] md:px-[10%] my-8">
        <div className="text-3xl font-semibold py-6">Explore Menu</div>
          {/* Slider */}
          <Slider {...settings} className="">
            {MenuItems.map((item) => (
              <SliderCard
              key={item.id}
              title={item.title}
              img ={item.img}
            />
            
            ))}
          </Slider>
      </div>
    </>
  );
};

export default MenuSlider;
