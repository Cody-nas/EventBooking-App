import React from "react";
import Hero from "../Components/Hero";
import Choose from "../Components/Choose";
import Get from "../Components/Get";
import Footer from "../Components/Footer";
import Upcoming from "../Components/Upcoming";

const Home = () => {
  return (
    <div>
      <Hero />
      <Upcoming />
      <Choose />
      <Get />
      <Footer />
    </div>
  );
};

export default Home;
