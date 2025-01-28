import React from "react";
import Hero from "../Components/Hero";
import Choose from "../Components/Choose";
import Get from "../Components/Get";
import Upcoming from "../Components/Upcoming";

const Home = () => {
  return (
    <div>
      <Hero />
      <Upcoming />
      <Choose />
      <Get />
    </div>
  );
};

export default Home;
