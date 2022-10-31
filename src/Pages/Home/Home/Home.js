import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import PopularProduct from "../PopularProduct/PopularProduct";
import Service from "../Service/Service";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div className="py-5 max-w-6xl mx-auto px-5">
      <Banner />
      <About />
      <Service />
      <CallToAction />
      <PopularProduct />
      <Team />
    </div>
  );
};

export default Home;
