import React from "react";
import calender from "../../../assets/icons/calender.svg";
import call from "../../../assets/icons/call.svg";
import location from "../../../assets/icons/location.svg";

const CallToAction = () => {
  return (
    <div className="bg-[#151515] py-24 px-16 my-32 rounded-[10px] text-white flex justify-between">
      <div className="flex justify-center items-center gap-5">
        <img src={calender} alt="" />
        <div>
          <p className="text-sm">We are open monday-friday</p>
          <p className="font-bold text-xl">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <img src={call} alt="" />
        <div>
          <p className="text-sm">Have a question?</p>
          <p className="font-bold text-xl">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <img src={location} alt="" />
        <div>
          <p className="text-sm">Need a repair? our address</p>
          <p className="font-bold text-xl">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
