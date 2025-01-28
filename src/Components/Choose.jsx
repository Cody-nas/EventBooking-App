import vip from "../assets/vip.jpg";
import secure from "../assets/secure.jpg";
import support from "../assets/support.jpg";

const Choose = () => {
  return (
    <div>
      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 animate-slide-in">
            Why Choose Us?
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all">
              <img
                src={vip}
                alt="Feature 1"
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Easy Booking
              </h3>
              <p className="mt-2 text-gray-600">
                Book tickets hassle-free with our intuitive platform.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all">
              <img
                src={secure}
                alt="Feature 2"
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Secure Payments
              </h3>
              <p className="mt-2 text-gray-600">
                We ensure 100% secure transactions for a worry-free experience.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all">
              <img
                src={support}
                alt="Feature 3"
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                24/7 Support
              </h3>
              <p className="mt-2 text-gray-600">
                Our support team is here to assist you anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
