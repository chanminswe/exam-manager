import React from "react";
import mta from "/images/mta.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="w-32">
          <img src={mta} alt="Logo" className="w-full h-auto object-contain" />
        </Link>
        <div>
          <Link
            to="/admin"
            className="text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors duration-300"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
