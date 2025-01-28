import guitar from "../assets/guitar.jpg";

const Abooo = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        className="relative w-full h-[700px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${guitar})` }}
      >
        {/* Overlay for Dim Effect */}
        <div className="absolute inset- bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide animate-fade-in">
            About <span className="text-blue-400">The Martins Ticket</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Discover our journey and what makes us the go-to ticketing platform
            for all your events. We are here to connect people and create
            unforgettable experiences.
          </p>

          {/* Call to Action Button */}
          <div className="mt-8">
            <button className="px-8 py-3 text-lg font-medium bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg transition-transform transform hover:scale-105 animate-bounce">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abooo;
