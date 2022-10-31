import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div className="py-5 max-w-6xl mx-auto px-5">
      <Banner />
      <About />
      <Service />
      <CallToAction />
    </div>
  );
};

export default Home;
