import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/exams");
  }

  return (
    <div className="flex h-[90vh] justify-center items-center ">
      <div className="flex w-[90%] max-w-3xl mx-auto shadow-lg border border-gray-200 rounded-lg overflow-hidden">
        {/* Welcome Section */}
        <div className="flex flex-col justify-center items-center w-1/2 bg-blue-50 p-8">
          <h3 className="font-bold text-3xl text-gray-800 mb-2">
            Welcome to the exam!
          </h3>
          <p className="text-lg text-gray-700">
            Login before you answer your exam.
          </p>
        </div>

        {/* Login Form Section */}
        <div className="w-1/2 bg-white p-8">
          <form
            onSubmit={handleSubmit}
            className="h-full flex flex-col justify-center"
          >
            {/* Username Field */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                id="username"
                name="username"
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="password"
                id="password"
                name="password"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-around mt-6">
              <button
                type="submit"
                className="w-24 py-2 text-white bg-blue-500 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
              >
                Sign In
              </button>
              <button
                type="button"
                className="w-24 py-2 text-blue-500 border border-blue-500 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition duration-200"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
