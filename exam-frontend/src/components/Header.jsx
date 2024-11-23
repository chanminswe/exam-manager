import React from "react";
import mta from "/images/mta.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-400 to-stone-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center">
            <img
              src={mta}
              alt="Logo"
              className="w-12 h-12 object-contain rounded-full border-2 border-white"
            />
            <span className="ml-3 text-white text-2xl font-bold tracking-wide">
              Exam Manager
            </span>
          </Link>
        </div>
        <div>
          <Link
            to="/admin"
            className="bg-white text-blue-600 hover:text-blue-700 font-medium text-base py-2 px-5 rounded-lg shadow-md transition-all hover:bg-gray-100"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
