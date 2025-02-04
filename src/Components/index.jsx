import React from "react";

const EventBanner = () => {
  return (
    <div className="bg-purple-100 rounded-lg flex items-center justify-between p-6 max-w-4xl mx-auto shadow-lg">
      {/* Image Section */}
      <div className="w-1/2">
        <img
          src="/event-image.png" // Replace with actual image path
          alt="People planning an event"
          className="w-full h-auto"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-1/2 pl-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Make your own Event
        </h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-pink-600 transition">
          Create Events
        </button>
      </div>
    </div>
  );
};

export default EventBanner;
