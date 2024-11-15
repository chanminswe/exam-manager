import React from "react";
import mta from "/images/mta.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="flex justify-between items-center
     h-[10vh] bg-gray-200"
    >
      <div className="ml-5 w-30 h-24">
        <Link to="/">
          <img src={mta} className="w-[100%] h-[100%]" />
        </Link>
      </div>
      <div className="mr-10">
        <Link
          to="/admin"
          className="font-bold text-lg  hover:underline transition-transform duration-900"
        >
          Admin Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
