import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import jazznight from "../assets/jazznight.jpg";
import rock from "../assets/rock.jpg";
import musicfest from "../assets/musicfest.jpg";
import electronic from "../assets/electronic.jpg";
import rhythm from "../assets/rhythm.jpg";
import otwo from "../assets/otwo.jpg";

const Hero2 = () => {
  const slides = [
    {
      id: 1,
      image: jazznight,
      label: "Jazz Night",
      text: "Smooth tunes and candlelight,\nJoin us for a jazzy night.",
      buttonText: "Plan Your Evening"
    },
    {
      id: 2,
      image: rock,
      label: "Rock Concert",
      text: "Feel the beat, hear the sound,\nLet the music shake the ground!",
      buttonText: "Get Your Tickets"
    },
    {
      id: 3,
      image: musicfest,
      label: "Music Festival 2025",
      text: "Dancing crowds and skies so bright,\nFestival vibes all day and night.",
      buttonText: "Join the Fest"
    },
    {
      id: 4,
      image: electronic,
      label: "Electronic Fest",
      text: "Lights flash, the bass will drop,\nLet’s go hard, we’ll never stop!",
      buttonText: "Feel the Energy"
    },
    {
      id: 5,
      image: rhythm,
      label: "Rhythm Of The Night",
      text: "Groove and sway, let’s take flight,\nLose yourself in the rhythm tonight.",
      buttonText: "Dance With Us"
    },
    {
      id: 6,
      image: otwo,
      label: "Rock Legends Live",
      text: "Legends play, the crowd goes wild,\nHistory made, rock revived!",
      buttonText: "Be Part of It"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-16 w-full max-w-screen-2xl mx-auto">
      <div className="bg-red-800 text-white p-10 rounded-xl flex items-center relative overflow-hidden">
        {/* Left Button */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow"
        >
          <ChevronLeft className="text-black w-5 h-5" />
        </button> */}

        {/* Slide Content */}
        <div className="flex flex-col md:flex-row gap-8 items-center w-full justify-center">
          {/* Image */}
          <div className="relative bg-gray-200 p-4 rounded-lg overflow-hidden">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].label}
              className="w-96 h-96 object-cover rounded-lg"
            />
            <span className="absolute bottom-2 left-2 bg-red-700 text-white px-4 py-2 text-sm font-bold">
              {slides[currentIndex].label}
            </span>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold whitespace-pre-line leading-tight">
              {slides[currentIndex].text}
            </h2>
            <button className="mt-6 bg-white text-red-700 font-bold py-4 px-8 rounded text-lg">
              {slides[currentIndex].buttonText}
            </button>
          </div>
        </div>

        {/* Right Button */}
        {/* <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow"
        >
          <ChevronRight className="text-black w-5 h-5" />
        </button> */}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1 h-1 rounded-full cursor-pointer ${currentIndex === index ? "bg-gray-900" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero2;
