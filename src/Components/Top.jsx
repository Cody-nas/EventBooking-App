import React, { useRef } from "react";
import atl from "../assets/atlanta.jpg";
import chi from "../assets/chicago.webp";
import boston from "../assets/boston.webp";
import miami from "../assets/miami.jpg";
import charlotte from "../assets/charlotte.webp";
import vegas from "../assets/vegas.webp";
import nw from "../assets/newyork.webp";
import philly from "../assets/philly.webp";
import san from "../assets/sandiego.jpg";
import sanFr from "../assets/sanfrancisco.jpg";
import wash from "../assets/washington.jpg";
import orl from "../assets/orlando.jpg";
import houston from "../assets/houston.webp";
import dallas from "../assets/dallas.webp";
import la from "../assets/LA.jpg";

const Top = () => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: direction * 320, behavior: "smooth" });
    }
  };

  const cities = [
    { name: "New York", img: nw },
    { name: "Los Angeles", img: la },
    { name: "Chicago", img: chi },
    { name: "Atlanta", img: atl },
    { name: "Dallas", img: dallas },
    { name: "Washington", img: wash },
    { name: "Houston", img: houston },
    { name: "Orlando", img: orl },
    { name: "San Francisco", img: sanFr },
    { name: "San Diego", img: san },
    { name: "Philadelphia", img: philly },
    { name: "Boston", img: boston },
    { name: "Miami", img: miami },
    { name: "Charlotte", img: charlotte },
    { name: "Las Vegas", img: vegas },
  ];

  return (
    <div className="w-[80%] mx-auto relative py-8">
      <h2 className="text-2xl font-bold mb-4">Top destinations in United States</h2>
      <div className="relative mt-2.5 overflow-hidden">
        <div ref={carouselRef} className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-4">
          {cities.map((city, index) => (
            <div key={index} className="min-w-[300px] rounded-xl overflow-hidden shadow-lg relative">
              <img src={city.img} className="w-full h-48 object-cover" alt={city.name} />
              <div className="absolute bottom-4 left-4 text-white text-3xl font-bold">
                {city.name}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollCarousel(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &#10094;
        </button>
        <button
          onClick={() => scrollCarousel(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Top;
