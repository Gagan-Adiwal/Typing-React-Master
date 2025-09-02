import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} TypingMaster Pro. All Rights Reserved.
        </p>
        <div className="mt-3 flex flex-wrap justify-center space-x-6">
          <Link to="/privacy-policy" className="hover:text-yellow-400">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-yellow-400">
            Terms
          </Link>
          <Link to="/contact" className="hover:text-yellow-400">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
