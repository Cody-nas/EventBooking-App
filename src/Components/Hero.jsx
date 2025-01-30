// import React from "react";
// import { GoCopilot } from "react-icons/go";
import Background from "../assets/Background.jpg";

const Hero = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Welcome to the Ultimate Event Experience
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Get ready for unforgettable moments and exciting adventures.
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all">
            Explore Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
