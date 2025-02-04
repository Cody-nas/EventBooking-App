import React from "react";
import Bannerimage from "../assets/Banner.jpg"

const EventBanner = () => {
  return (
    <section className='flex-col md:items-center md:px-12 p-4 max-w-screen-2xl shadow-lg mx-auto my-24'>
      <div className="flex flex-col md:flex-row justify-evenly items-center ">
        <div>
          <img src={Bannerimage} alt="" className="w-[450px] h-[450px]" />
        </div>


        <div className="mt-6 lg:mt-0">
          <h2 className="text-2xl font-medium">  Make your own Event</h2>
          <p className="mt-2 text-gray-300 max-w-2xl ">
            Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
            pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
            Nascetur viverra arcu sed amet cursus purus.
          </p>
          <button className="mt-6 px-8 py-3 cursor-pointer bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all">
            Explore Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
