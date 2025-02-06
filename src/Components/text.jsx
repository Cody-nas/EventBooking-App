import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function EventDetails() {
  const [ticketCount, setTicketCount] = useState(1);
  const ticketPrice = 1.95;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src="/path-to-your-image.jpg"
        alt="Valentine Fest"
        className="w-full rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-4">Saturday, February 22</h2>
      <h1 className="text-3xl font-bold text-gray-900">Valentine Fest</h1>
      <p className="text-gray-600 mt-2">ALL AGES</p>
      <p className="text-gray-700 mt-2">
        Celebrate love and friendship at Valentine Fest - a fun-filled event to
        spread joy and happiness!
      </p>
      <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg mt-4">
        <span className="bg-green-100 p-2 rounded-full">🌿</span>
        <p className="text-gray-700 font-medium">
          By <span className="font-bold">Sultzino entertainment and GH entertainment</span>
        </p>
        <Button className="ml-auto bg-blue-600 text-white">Follow</Button>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Date and time</h3>
        <p className="flex items-center text-gray-700 mt-2">
          <FaCalendarAlt className="mr-2 text-gray-500" /> Saturday, February 22 · 10am - 6pm WAT
        </p>
      </div>

      <div className="mt-6 border p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Sultzino entertainment</p>
          <div className="flex items-center gap-2 border p-2 rounded-lg">
            <button
              onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
              className="px-2 py-1 bg-gray-200 rounded-lg"
            >
              -
            </button>
            <span className="text-lg font-semibold">{ticketCount}</span>
            <button
              onClick={() => setTicketCount(ticketCount + 1)}
              className="px-2 py-1 bg-blue-500 text-white rounded-lg"
            >
              +
            </button>
          </div>
        </div>
        <p className="text-gray-700 mt-2">${ticketPrice.toFixed(2)}</p>
        <Button className="w-full bg-red-600 text-white mt-4">
          Check out for ${(ticketCount * ticketPrice).toFixed(2)}
        </Button>
      </div>
    </div>
  );
}





import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function EventDetails() {
  const [ticketCount, setTicketCount] = useState(1);
  const ticketPrice = 1.95;
  const [reviews, setReviews] = useState([
    { name: "John Doe", comment: "Had a fantastic time! Looking forward to the next one." },
    { name: "Jane Smith", comment: "Great event with amazing people!" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setReviews([...reviews, { name: "Anonymous", comment: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold">Location</h2>
      <p className="flex items-center text-gray-700 mt-2">
        <FaMapMarkerAlt className="mr-2 text-gray-500" />
        <span className="font-bold">Ita-Faji Primary Healthcare Centre</span>
      </p>
      <p className="text-gray-600">Alli Street Lagos, LA 102273</p>
      <a href="#" className="text-blue-600">Show map</a>

      <h2 className="text-2xl font-semibold mt-6">Refund Policy</h2>
      <p className="text-gray-600">No Refunds</p>

      <h2 className="text-2xl font-semibold mt-6">About this event</h2>
      <div className="flex items-center gap-4 mt-2">
        <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
          <FaClock className="text-gray-500" /> Event lasts 8 hours
        </span>
        <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
          🎟 ALL AGES
        </span>
        <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
          🅿 Free venue parking
        </span>
      </div>

      <h2 className="text-2xl font-semibold mt-6">Tags</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        {["Nigeria Events", "Lagos Events", "Things to do in Lagos", "Lagos Festivals", "Lagos Fashion Festivals", "#music", "#love", "#celebration", "#couples", "#romance"].map(tag => (
          <span key={tag} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tag}</span>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-6">Organized by</h2>
      <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
        <p className="font-bold">Sultzino entertainment and GH entertainment</p>
        <div className="flex gap-4">
          <a href="#" className="text-blue-600">Contact</a>
          <Button className="bg-blue-600 text-white">Follow</Button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6">Reviews & Comments</h2>
      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        {reviews.map((review, index) => (
          <div key={index} className="mb-2 border-b pb-2">
            <p className="font-semibold">{review.name}</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
        <div className="mt-4">
          <textarea
            className="w-full p-2 border rounded-md"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <Button className="mt-2 bg-blue-600 text-white" onClick={handleAddComment}>Submit</Button>
        </div>
      </div>
    </div>
  );
}
