import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold tracking-wide">
          TypingMaster Pro
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:text-yellow-300">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-yellow-300">
              Terms
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-800 px-6 py-4 space-y-4 text-white font-medium">
          <Link
            to="/"
            className="block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/privacy-policy"
            className="block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Terms
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
