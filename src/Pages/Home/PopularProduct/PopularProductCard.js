import React from "react";
import star from "../../../assets/icons/star.svg";

const PopularProductCard = () => {
  return (
    <div className="w-full bg-base-100 rounded-[10px] border p-6">
      <figure>
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Service"
          className="rounded-[10px] h-52 w-full object-cover"
        />
      </figure>
      <div className="mt-5 flex flex-col justify-center text-center">
        <div className="flex gap-1 justify-center">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
        <h2 className="text-[#444444] font-bold text-2xl">Car Engine Plug</h2>

        <p className="font-semibold text-xl text-primary mt-2">$20.00</p>
      </div>
    </div>
  );
};

export default PopularProductCard;
