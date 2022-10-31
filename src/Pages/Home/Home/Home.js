import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="py-5 max-w-6xl mx-auto px-5">
      <Banner />
      <About />
    </div>
  );
};

export default Home;
