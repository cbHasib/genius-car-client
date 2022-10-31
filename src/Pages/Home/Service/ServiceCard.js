import React from "react";

const ServiceCard = () => {
  return (
    <div className="w-full bg-base-100 rounded-[10px] border p-6">
      <figure>
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Service"
          className="rounded-[10px] h-52 w-full object-cover"
        />
      </figure>
      <div className="mt-5">
        <h2 className="text-[#444444] font-bold text-xl">Electrical System</h2>
        <div className="flex justify-between mt-5 text-primary">
          <p className="font-semibold text-lg">Price : $20.00</p>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:cursor-pointer"
          >
            <path
              d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255"
              stroke="#FF3811"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
