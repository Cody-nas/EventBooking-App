// import React from React
import buybg from "../assets/buybg.jpg";

const Buy = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
        <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500">
          <div className="relative">
            <img
              src={buybg}
              alt="Concert"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <h1 className="text-5xl font-extrabold text-white drop-shadow-lg animate-fade-in">
                Buy Your Ticket
              </h1>
            </div>
          </div>

          <div className="p-10 animate-slide-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Event: <span className="text-blue-600">Music Festival 2025</span>
            </h2>

            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-3 text-lg">
                Select Ticket Type
              </label>
              <select className="w-full border rounded-lg p-4 text-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition-all">
                <option>General Admission - $50</option>
                <option>VIP Access - $120</option>
                <option>Backstage Pass - $200</option>
              </select>
            </div>

            <div className="flex items-center mb-8">
              <label className="block text-gray-700 font-medium mr-6 text-lg">
                Number of Tickets:
              </label>
              <button className="px-6 py-3 bg-gray-300 rounded-l-lg hover:bg-gray-400 transition-all">
                -
              </button>
              <span className="px-8 py-3 bg-gray-100 text-lg font-semibold border"></span>
              <button className="px-6 py-3 bg-gray-300 rounded-r-lg hover:bg-gray-400 transition-all">
                +
              </button>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-3 text-lg">
                Payment Method
              </label>
              <select className="w-full border rounded-lg p-4 text-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition-all">
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Bank Transfer</option>
              </select>
            </div>

            <div className="border-t pt-8 flex justify-between items-center">
              <div>
                <p className="text-lg text-gray-600">Total Price:</p>
                <h3 className="text-3xl font-bold text-gray-800"></h3>
              </div>
              <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
