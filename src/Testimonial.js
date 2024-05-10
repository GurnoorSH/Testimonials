import React, { useState } from "react";
import Card from "./Card";
import { MdOutlineKeyboardArrowLeft , MdOutlineKeyboardArrowRight } from "react-icons/md";

const Testimonial = (props) => {
  let reviews = props.reviews;
  const [card, setcard] = useState(0)

  function leftHandler() {
    setcard((card - 1 + reviews.length ) % reviews.length )
    
   }
   function rightHandler() {
    setcard((card + 1 ) % reviews.length) 
    
   }

   function surpriseHandler() {
    setcard(Math.floor(Math.random()* reviews.length))
    
   }
  return (
    <div className="w-[85vw] md:w-[700px]  bg-slate-200  rounded-md flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700  hover:shadow-xl">
      
      <Card review={reviews[card]} />
      <div className=" flex text-3xl mt-5  gap-3 text-violet-400 font-bold mx-auto ">
        {" "}
          <button className=" cursor-pointer  hover:text-violet-500" onClick={leftHandler}> <MdOutlineKeyboardArrowLeft/> </button>
        <button onClick={rightHandler}className=" cursor-pointer  hover:text-violet-500"><MdOutlineKeyboardArrowRight/> </button>{" "}
      </div>
      <div className=" mt-9">
        {" "}
        <button className=" bg-violet-600 hover:bg-violet-800 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg" onClick={surpriseHandler}> Surprise Me </button>{" "}
      </div>
    </div>

  );
};

export default Testimonial;
