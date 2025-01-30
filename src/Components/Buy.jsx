import { useState } from "react";
import buybg from "../assets/buybg.jpg";

const Buy = () => {
  const [ticketCount, setTicketCount] = useState(1);
  const [ticketType, setTicketType] = useState(50); // Default to General Admission price
  const totalPrice = ticketCount * ticketType;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500">
        {/* Banner Image */}
        <div className="relative">
          <img src={buybg} alt="Concert" className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg animate-fade-in">
              Buy Your Ticket
            </h1>
          </div>
        </div>

        {/* Ticket Purchase Section */}
        <div className="p-10 animate-slide-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Event: <span className="text-blue-600">Music Festival 2025</span>
          </h2>

          {/* Ticket Type Selection */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-3 text-lg">
              Select Ticket Type
            </label>
            <select
              className="w-full border rounded-lg p-4 text-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition-all"
              onChange={(e) =>
                setTicketType(Number(e.target.value.split("$")[1]))
              }
            >
              <option>General Admission - $50</option>
              <option>VIP Access - $120</option>
              <option>Backstage Pass - $200</option>
            </select>
          </div>

          {/* Ticket Quantity Selection */}
          <div className="flex items-center mb-8">
            <label className="block text-gray-700 font-medium mr-6 text-lg">
              Number of Tickets:
            </label>
            <button
              className="px-6 py-3 bg-gray-300 rounded-l-lg hover:bg-gray-400 transition-all"
              onClick={() =>
                setTicketCount(ticketCount > 1 ? ticketCount - 1 : 1)
              }
            >
              -
            </button>
            <span className="px-8 py-3 bg-gray-100 text-lg font-semibold border">
              {ticketCount}
            </span>
            <button
              className="px-6 py-3 bg-gray-300 rounded-r-lg hover:bg-gray-400 transition-all"
              onClick={() => setTicketCount(ticketCount + 1)}
            >
              +
            </button>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-3 text-lg">
              Payment Method
            </label>
            <select className="w-full border rounded-lg p-4 text-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition-all">
              <option>Debit Card</option>
              <option>Pay Online</option>
              <option>Bank Transfer</option>
            </select>
          </div>

          {/* Total Price & Payment Button */}
          <div className="border-t pt-8 flex justify-between items-center">
            <div>
              <p className="text-lg text-gray-600">Total Price:</p>
              <h3 className="text-3xl font-bold text-gray-800">
                ${totalPrice}
              </h3>
            </div>
            <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 cursor-pointer">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
