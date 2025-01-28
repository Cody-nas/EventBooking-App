const Call = () => {
  return (
    <div>
      {/* Call-to-Action Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 py-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-40 top-10 left-10 absolute"></div>
          <div className="w-72 h-72 bg-blue-300 rounded-full blur-2xl opacity-50 bottom-10 right-20 absolute"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight animate-fade-in">
            Ready to Join the Future of Ticketing?
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            Unlock unforgettable experiences with ease. Whether it’s concerts,
            sports events, or theater shows, we’re here to make it seamless,
            secure, and extraordinary.
          </p>

          {/* Features Highlights */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.75V19.25M5.75 12H18.25"
                  />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-semibold">
                Seamless Experience
              </h4>
              <p className="mt-2 text-sm text-gray-200">
                Our platform ensures you enjoy a smooth, hassle-free booking
                journey.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12l7.25 7.25M10.25 12L3.75 4.75M21.25 12h-9"
                  />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-semibold">
                Unforgettable Events
              </h4>
              <p className="mt-2 text-sm text-gray-200">
                We connect you to world-class experiences you’ll cherish
                forever.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9.75l4.25 4.25-4.25 4.25m-7.5-8.5L4 9.75l4.25-4.25"
                  />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-semibold">Secure Platform</h4>
              <p className="mt-2 text-sm text-gray-200">
                Your ticketing journey is protected with cutting-edge security
                features.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-12 px-10 py-4 bg-white text-blue-600 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 cursor-pointer transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Call;
