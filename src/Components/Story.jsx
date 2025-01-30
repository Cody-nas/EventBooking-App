const Story = () => {
  return (
    <div>
      {/* Our Story Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="flex justify-center items-center min-h-screen">
          <div className="max-w-4xl bg-white shadow-2xl rounded-2xl p-10 relative">
            {/* Decorative Line */}
            <div className="absolute -top-4 left-8 w-16 h-1 bg-blue-500 rounded-full"></div>

            {/* Heading */}
            <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-8">
              Our Story
            </h2>

            {/* Text Content */}
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              At{" "}
              <span className="font-semibold text-blue-500">
                The Martins Ticket
              </span>
              , we believe every experience begins with a single step—the
              ticket. Founded with a vision to bring people closer to the
              moments that matter most, we set out to transform how the world
              accesses live events. Whether it’s the thrill of a sold-out
              concert, the energy of a packed stadium, or the intimacy of a
              theater show, we’re here to make it easier for you to get there.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              What started as a small idea among passionate event-goers quickly
              grew into a global platform that connects fans to the events they
              love. Our mission is simple: to bridge the gap between audiences
              and unforgettable experiences, all while making the ticketing
              process seamless, secure, and accessible to all.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              From music festivals and comedy shows to sports games and cultural
              exhibitions, we’re proud to offer a wide range of events that
              inspire, entertain, and unite communities. Behind the scenes, our
              team is dedicated to providing innovative tools, transparent
              pricing, and personalized support to ensure your journey is as
              exciting as the destination.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              With{" "}
              <span className="font-semibold text-blue-500">
                The Martins Tickets
              </span>
              , you’re not just buying a ticket—you’re opening the door to
              memories that will last a lifetime. So, whether you’re planning
              your next adventure or chasing a dream event, we’re here to help
              you make it happen.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Let us be your trusted partner in exploring the extraordinary.
              Your story begins here, and we’re honored to be a part of it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
