import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo-light.svg";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Find Events", path: "/" },
    { name: "About", path: "/about" },
    { name: "Buy Tickets", path: "/purchase" },



  ];

  return (
    <nav className="fixed top-0 bg-white bg-opacity-30 rounded left-0 right-0  z-50">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-14">
        {/* Logo */}
        <div className="flex cursor-pointer items-center space-x-2">
          <img src={Logo} alt="" />
          <span className="text-2xl font-extrabold text-black tracking-wide">
            EvenTicket
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-10">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="text-base font-medium text-black hover:text-blue-600 transition-all duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4 ">
          <Link to="/signup">
            <button className="px-6 py-2 text-sm font-bold cursor-pointer text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md">
              Sign Up
            </button>
          </Link>

          <Link to="/login">
            <button className="px-6 py-2 text-sm font-bold cursor-pointer text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <FaTimes className="text-black w-6 h-6" />
          ) : (
            <FaBars className="text-black w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black shadow-lg border-t border-gray-200 absolute left-0 right-0 top-16">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  onClick={toggleMenu}
                  className="block text-white font-medium hover:text-blue-600 transition-all duration-300"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-4 px-6 pb-4">
            <Link to="/signup">
              <button className="w-full py-2 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-text-white transition-all duration-300 shadow-md">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="w-full py-2 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-text-white transition-all duration-300 shadow-md">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
