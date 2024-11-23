import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    await axios
      .post(
        "http://localhost:4040/auth/user/login",
        { username, password },
        { withCredentials: true }
      )
      .then((response) => {
        alert("Logged In Successfully!");
        navigate("/exams");
        console.log(response);
      })
      .catch((error) => {
        console.log("Error Occurred:", error.message);
      });
  }

  return (
    <div className="flex h-[90vh] justify-center items-center bg-gradient-to-r ">
      <div className="flex w-[90%] max-w-[60%]  mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gray-200 p-6">
          <h3 className="text-4xl font-bold text-blue-700 mb-4">
            Welcome Back!
          </h3>
          <p className="text-gray-600 text-lg text-center">
            Log in to access your exams and continue your progress.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8">
          <form
            onSubmit={handleSubmit}
            className="h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-700 mb-8 text-center">
              User Login
            </h3>

            {/* Username Field */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onChange={(event) => setUsername(event.target.value)}
                className="shadow-md border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
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
                onChange={(event) => setPassword(event.target.value)}
                className="shadow-md border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="w-[45%] py-3 text-white bg-blue-500 rounded-md font-semibold hover:bg-blue-600 transition-all duration-300"
              >
                Sign In
              </button>
              <button
                type="button"
                className="w-[45%] py-3 text-white bg-green-500 rounded-md font-semibold hover:bg-green-600 transition-all duration-300"
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
