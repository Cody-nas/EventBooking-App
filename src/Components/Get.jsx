import React from "react";

const Get = () => {
  return (
    <div>
      <div>
        {/* CTA Section */}
        <section className="bg-blue-600 py-20 text-center text-white">
          <h2 className="text-4xl font-bold animate-fade-in">
            Get Your Tickets Now!
          </h2>
          <p className="mt-4 text-lg">
            Don't miss out on the latest events. Book your tickets today.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-200 transition-all">
            Browse Events
          </button>
        </section>
      </div>
    </div>
  );
};

export default Get;
