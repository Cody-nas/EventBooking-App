import React, { useRef } from "react";

const Carousel = () => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: direction * 320, behavior: "smooth" });
    }
  };

  return (
    <div className="w-[80%] mx-auto relative py-8">
      <h2 className="text-2xl font-bold text-center mb-4">
        Top destinations in United States
      </h2>
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-4"
        >
          {[
            { name: "New York", img: "https://source.unsplash.com/600x400/?newyork" },
            { name: "Los Angeles", img: "https://source.unsplash.com/600x400/?losangeles" },
            { name: "Chicago", img: "https://source.unsplash.com/600x400/?chicago" },
            { name: "Washington", img: "https://source.unsplash.com/600x400/?washingtondc" }
          ].map((city, index) => (
            <div key={index} className="min-w-[300px] rounded-xl overflow-hidden shadow-lg relative">
              <img src={city.img} className="w-full h-48 object-cover" alt={city.name} />
              <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
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

export default Carousel;
