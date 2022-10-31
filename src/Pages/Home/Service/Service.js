import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div>
      <div className="w-[90%] lg:w-3/5 mx-auto text-center">
        <p className="mt-5 lg:mt-0 text-primary font-bold text-xl">Service</p>
        <h2 className="text-3xl lg:text-5xl font-bold leading-10 lg:leading-[54px]">
          Our Service Area
        </h2>
        <p className="text-[#737373] mt-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline btn-primary">More Services</button>
      </div>
    </div>
  );
};

export default Service;
