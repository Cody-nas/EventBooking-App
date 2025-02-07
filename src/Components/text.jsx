import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    images: [
      { src: "/tango.jpg", label: "TANGO LESSONS" },
      { src: "/speed-dating.jpg", label: "SINGLES SPEED DATING" }
    ],
    text: "SOULMATES OR FIRST DATES\nWE'VE GOT JUST THE THING.",
    buttonText: "Plan Valentine’s Day"
  },
  {
    id: 2,
    images: [
      { src: "/chocolate.jpg", label: "CHOCOLATE TASTING" },
      { src: "/wine.jpg", label: "WINE PAIRING" }
    ],
    text: "SWEET INDULGENCE\nA PERFECT PAIRING FOR LOVE.",
    buttonText: "Discover Experiences"
  },
  {
    id: 3,
    images: [
      { src: "/concert.jpg", label: "LIVE MUSIC" },
      { src: "/dinner.jpg", label: "ROMANTIC DINNER" }
    ],
    text: "A NIGHT TO REMEMBER\nMUSIC, FOOD, AND LOVE.",
    buttonText: "Book Now"
  }
];

export default function ValentinesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="bg-red-800 text-white p-6 rounded-lg flex items-center relative overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft className="text-black" />
        </button>
        <div className="flex flex-col md:flex-row gap-6 items-center w-full justify-center">
          <div className="flex gap-4">
            {slides[currentIndex].images.map((img, index) => (
              <div
                key={index}
                className="relative bg-gray-200 p-2 rounded-lg overflow-hidden"
              >
                <img src={img.src} alt={img.label} className="w-44 h-44 object-cover rounded-lg" />
                <span className="absolute bottom-2 left-2 bg-red-700 text-white px-2 py-1 text-sm font-bold">{img.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold whitespace-pre-line">{slides[currentIndex].text}</h2>
            <Button className="mt-4 bg-white text-red-700 font-bold py-2 px-4 rounded">
              {slides[currentIndex].buttonText}
            </Button>
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronRight className="text-black" />
        </button>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-red-600" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
