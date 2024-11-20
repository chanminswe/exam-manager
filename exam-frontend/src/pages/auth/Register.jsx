import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [batchNumber, setBatchNumber] = useState(0);
  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    await axios
      .post("http://localhost:4040/auth/user/register", {
        username,
        password,
        batchNumber,
      })
      .then((resp) => {
        alert(`Registered ${username} sucessfully!`);
        navigate("/");
        console.log(resp);
      })
      .catch((error) => {
        alert("An Unknown Error Occured Please Try Again Later");
        console.log(error);
      });
  }

  return (
    <div className="flex h-[90vh] justify-center items-center bg-gray-100">
      <div className="flex flex-col w-[90%] max-w-lg mx-auto shadow-lg border border-gray-200 rounded-lg overflow-hidden bg-white p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create an Account
        </h2>

        {/* Register Form */}
        <form onSubmit={handleRegister} className="flex flex-col space-y-6">
          {/* Username Field */}
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              className="shadow border border-gray-300 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Batch Number Field */}
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="batch"
            >
              Semester
            </label>
            <input
              onChange={(e) => setBatchNumber(e.target.value)}
              className="shadow border border-gray-300 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              id="batch"
              name="batch"
              placeholder="Enter your Semester"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-blue-500 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
