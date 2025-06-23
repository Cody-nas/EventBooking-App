import martins from "../assets/martins.jpg";
import chisom from "../assets/wisdom.jpg";
import wisdom from "../assets/wisdom.jpg";

const OurTeam = () => {
  return (
    <div>
      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Behind{" "}
              <span className="font-semibold text-blue-500">EvenTicket</span> is
              a talented team dedicated to making your event experience
              extraordinary. We are innovators, strategists, and visionaries
              working together to create unforgettable moments.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transition-transform hover:scale-105">
              <img
                src={martins}
                alt="Team Member"
                className="w-32 h-32 max-w-[128px] rounded-full shadow-md object-cover object-top aspect-square"
              />
              <h3 className="mt-6 text-2xl font-bold text-gray-800">
                Okazila Wisdom
              </h3>
              <p className="text-blue-500 text-sm font-semibold mt-2">
                CEO & Visionary
              </p>
              <p className="mt-4 text-center text-gray-600 leading-relaxed">
                Wisdom is the driving force behind{" "}
                <span className="font-semibold">The Martins Ticket</span>,
                blending innovation with a passion for bringing people closer to
                life’s biggest moments.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transition-transform hover:scale-105">
              <img
                src={wisdom}
                alt="Team Member"
                className="w-32 h-32 max-w-[128px] rounded-full shadow-md object-cover object-top aspect-square"
              />
              <h3 className="mt-6 text-2xl font-bold text-gray-800">
                Dule Martins
              </h3>
              <p className="text-blue-500 text-sm font-semibold mt-2">
                Chief Technology Officer
              </p>
              <p className="mt-4 text-center text-gray-600 leading-relaxed">
                Martins ensures that our platform is cutting-edge and
                user-friendly, delivering a seamless experience to event-goers
                worldwide.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transition-transform hover:scale-105">
              <img
                src={chisom}
                alt="Team Member"
                className="w-32 h-32 max-w-[128px] rounded-full shadow-md object-cover object-top aspect-square"
              />
              <h3 className="mt-6 text-2xl font-bold text-gray-800">
                Weli Chisom
              </h3>
              <p className="text-blue-500 text-sm font-semibold mt-2">
                Head of Marketing
              </p>
              <p className="mt-4 text-center text-gray-600 leading-relaxed">
                Chisom's creativity and strategy ensure that every event finds
                its audience, turning moments into memories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
