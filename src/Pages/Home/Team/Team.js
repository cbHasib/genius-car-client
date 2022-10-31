import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="py-32">
      <div className="w-[90%] lg:w-3/5 mx-auto text-center">
        <p className="mt-5 lg:mt-0 text-primary font-bold text-xl">Team</p>
        <h2 className="text-3xl lg:text-5xl font-bold leading-10 lg:leading-[54px]">
          Meet Our Team
        </h2>
        <p className="text-[#737373] mt-5">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="py-12 ">
        <TeamCard />
      </div>
    </div>
  );
};

export default Team;
