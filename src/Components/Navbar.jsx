import React, { useState } from "react";
import Logo from "../assets/Logo.png";
// react icons
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Buy Tickets", path: "/BuyTickets" },
    { name: "About", path: "/About" },
    // { name: "Login", path: "/Login" },
    // { name: "Sign Up", path: "/SignUp" },
  ];

  return (
    <nav className=" md:px-14 p-2 max-w-screen-2xl border-b  mx-auto fixed  right-0 left-0 z-50">
      <div className="text-lg container mx-auto flex justify-between items-center font-medium">
        {/* Logo */}
        <a href="/" className="text-2xl font-semibold flex items-center space-x-1.5">
          <img src={Logo} alt="Logo" className="w-8 h-8 text-black" />
          <span className="text-sm pr-12">Eventick</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className=" hover:text-gray-400 transition-colors"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="py-2 px-4 text-sm font-mediu  bg-gray-700 hover:bg-gray-800 rounded-full">
            Sign Up
          </button>
          <button className="py-2 px-4 text-sm font-medium text-black bg-green-500 hover:bg-green-600 rounded-full">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6 " />
          ) : (
            <FaBars className="w-6 h-6 " />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className=" absolute top-14 right-0 left-0 border-t border-gray-700 shadow-lg p-6 md:hidden">
          <ul className="space-y-4">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  onClick={toggleMenu}
                  className="block  hover:text-gray-300 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col space-y-4">
            <button className="py-2 px-4 text-sm font-medium border hover:bg-gray-800 rounded-full">
              Sign Up
            </button>
            <button className="py-2 px-4 text-sm font-medium  border hover:bg-gray-800 rounded-full">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
