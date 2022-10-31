import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row py-32 items-center">
      <div className="lg:w-1/2 relative lg:pr-16">
        <img
          src={person}
          alt="Person"
          className="w-[460px] h-[473px] object-cover rounded-[10px] mr-[61px] mb-[84px]"
        />
        <img
          src={parts}
          alt="Parts"
          className="w-[330px] h-[335px] rounded-[10px] object-cover absolute bottom-0 right-[60px] border-white border-8"
        />
      </div>
      <div className="lg:w-1/2">
        <div className="w-[90%] mx-auto text-center lg:mx-0 lg:text-left">
          <p className="mt-5 lg:mt-0 text-primary font-bold text-xl">About Us</p>
          <h2 className="text-3xl lg:text-5xl font-bold leading-10 lg:leading-[54px] lg:w-[80%]">
            We are qualified & of experience in this field
          </h2>
          <p className="text-[#737373] mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-[#737373] my-5">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-primary text-white w-[60%] lg:w-auto">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
