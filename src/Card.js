import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Card = (props) => {

  let review = props.review;
   
 


  return (
    <div className=" flex flex-col md:relative">
      <div className=" absolute  z-10 mx-auto ">
        <img
          className=" aspect-square rounded-full w-[140px] h-[140px] z-20"
          src={review.image}
          alt="aa"
        />
      </div>

      <div className="w-[140px] h-[140px] bg-violet-600 rounded-full absolute top-[-6px] z-[1] left-[10px]"></div>

      <div className=" text-center mt-7 ">
        <p className=" font-bold text-2xl  capitalize"> {review.name}</p>
        <p className=" text-violet-500 uppercase text-sm">{review.jobTitle}</p>
      </div>

      <div className="text-center mt-7">
        
      </div>
      <div className=" text-violet-400 mx-auto  mt-5">
        {" "}
        <FaQuoteLeft />
      </div>
      <div className=" text-center mt-4  text-slate-500">
        {" "}
        {review.description}
      </div>
      <div className=" text-violet-400 mx-auto  mt-5">
        {" "}
        <FaQuoteRight />
      </div>
      
    </div>
  );
};

export default Card;
