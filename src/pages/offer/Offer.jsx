import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-4 text-xl font-mono my-5">
        <img src="/pizza-delivery.png" alt="" className="w-1/3 md:w-1/4" />
        <p className=" text-red-600">
          No Offer Available Right Now!
        </p>
        <p className="rounded-md p-3 bg-red-600 text-white cursor-pointer" onClick={()=>navigate("/")}>Back to Home Page</p>
      </div>
      <Footer />
    </>
  );
};

export default Offer;
