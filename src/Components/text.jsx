import { useState } from "react";
import musicfest from "../assets/musicfest.jpg";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaParking } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";



const Events = () => {
  const [ticketCount, setTicketCount] = useState(1);
  const ticketPrice = 1.95;
  const [reviews, setReviews] = useState([
    { name: "Alice Johnson", comment: "Amazing experience!" },
    { name: "Michael Brown", comment: "Loved every moment of it." },
    { name: "John Doe", comment: "Had a fantastic time! Looking forward to the next one." },
    { name: "Jane Smith", comment: "Great event with amazing people!" },
    { name: "Emma White", comment: "Such a memorable experience!" },
    { name: "Oliver Green", comment: "Totally worth it, can't wait for the next event!" },
    { name: "Sophia Lee", comment: "Wonderful time, exceeded my expectations!" },
    { name: "James Wilson", comment: "Incredible event, would highly recommend!" },
    { name: "Mia Davis", comment: "Had so much fun, definitely coming back!" },
    { name: "Liam Clark", comment: "One of the best events I've attended!" },
    { name: "Amelia Harris", comment: "An unforgettable experience, can't stop talking about it!" },
    { name: "Noah Martin", comment: "The event was fantastic, so well organized!" },
    { name: "Isabella King", comment: "Such an enjoyable event, met amazing people!" },
    { name: "Ethan Scott", comment: "It was an incredible time, highly recommend it!" },
    { name: "Charlotte Turner", comment: "Absolutely loved it, had a blast!" }

  ]);
  const [newComment, setNewComment] = useState("");
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setReviews([...reviews, { name: "Anonymous", comment: newComment }]);
      setNewComment("");
    }
  };
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6">
      <img src={musicfest} alt=""
        className="w-full rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-4">Tuesday, March 25</h2>
      <h1 className="text-3xl font-bold text-gray-900">Music Festival 2025</h1>
      <p className="text-gray-600 mt-2">ALL AGES</p>
      <p className="text-gray-700 mt-2">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      </p>
      <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg mt-4">
        <span className="bg-green-100 p-2 rounded-full">🌿</span>
        <p className="text-gray-700 font-medium">
          By <span className="font-bold">Sultzino entertainment and GH entertainment</span>
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Date and time</h3>
        <p className="flex items-center text-gray-700 mt-2">
          <FaCalendarAlt className="mr-2 text-gray-500" /> Tuesday, March 25 · 12pm - 2am WAT
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
        <button
          className="w-full bg-red-600 text-white mt-4 px-6 py-3 rounded-lg font-semibold shadow-md transform transition-all hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 disabled:bg-gray-400"
          disabled={ticketCount === 0} // Disable the button if there are no tickets
        >
          Check out for ${(ticketCount * ticketPrice).toFixed(2)}
        </button>

      </div>
      <h2 className="text-2xl font-semibold">Location</h2>
      <p className="flex items-center text-gray-700 mt-2">
        <FaMapMarkerAlt className="mr-2 text-gray-500" />
        <span className="font-bold">Ita-Faji Primary Healthcare Centre</span>
      </p>

      <h2 className="text-2xl font-semibold mt-6">Refund Policy</h2>
      <p className="text-gray-600">No Refunds</p>
      <h2 className="text-2xl font-semibold mt-6">About this event</h2>
      <div className="flex items-center gap-6 mt-2">
        <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
          <FaClock /> Event lasts 8 hours
        </span>
        <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
          <IoTicketSharp />
          ALL AGES
        </span>
        <span className="flex  items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
          <FaParking className="text-blue-700" />
          Free venue parking
        </span>
      </div>
      <h2 className="text-2xl font-semibold mt-6">Tags</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        {["MusicFestival2025", "NYMusicFest", "LiveMusicNYC", "MusicFestNYC ", "FestivalVibes2025", "#music", "#love", "#MarchMusicFest", "#couples", "#NYCEvents2025"].map(tag => (
          <span key={tag} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tag}</span>
        ))}
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
          <button
            className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transform transition-all hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleAddComment}
          >
            Submit
          </button>

        </div>
      </div>
    </div>
  )
}

export default Events;