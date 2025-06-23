import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/logo-dark.svg";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <img src={Logo} alt="" />
            Eventick
          </h2>
          <p className="text-sm mt-2">
            Eventick is a global self-service ticketing platform for live
            experiences that allows anyone to create, share, find, and attend
            events that fuel their passions and enrich their lives.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-white hover:text-gray-300 text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-gray-300 text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-300 text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Plan Events */}
        <div>
          <h3 className="font-semibold text-lg">Plan Events</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Create and Set Up
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sell Tickets
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Online RSVP
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Online Events
              </a>
            </li>
          </ul>
        </div>

        {/* Eventick Info */}
        <div>
          <h3 className="font-semibold text-lg">Eventick</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms
              </a>
            </li>
          </ul>
        </div>

        {/* Stay in the Loop */}
        <div>
          <h3 className="font-semibold text-lg">Stay In The Loop</h3>
          <p className="text-sm mt-2">
            Join our mailing list to stay in the loop with our newest event and
            concert.
          </p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full px-4 py-2 text-black rounded-lg"
            />
            <button className="w-full mt-2 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        Copyright &copy; 2025 EVENTICKET
      </div>
    </footer>
  );
};

export default Footer;
