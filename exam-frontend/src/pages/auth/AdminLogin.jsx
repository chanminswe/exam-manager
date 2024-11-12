import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-[90vh] justify-center items-center bg-gray-100">
      <div className="flex flex-col w-[90%] max-w-lg mx-auto shadow-lg border border-gray-200 rounded-lg overflow-hidden bg-white p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Admin Login
        </h2>

        {/* Register Form */}
        <form className="flex flex-col space-y-6">
          {/* Username Field */}
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Admin Username
            </label>
            <input
              className="shadow border border-gray-300 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow border border-gray-300 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Register Button */}
          <button
            type="button"
            className="w-full py-3 mt-4 text-white bg-blue-500 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
            onClick={() => navigate("/")}
          >
            Admin Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
