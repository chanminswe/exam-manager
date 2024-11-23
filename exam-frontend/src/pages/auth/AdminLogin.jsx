import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AdminContext } from "../../context/AdminContextProvider";

const AdminLogin = () => {
  const [adminUsername, setAdminUsername] = useState(null);
  const [adminPassword, setAdminPassword] = useState(null);

  const { setAdminUsername: setAdminUserNameContext } =
    useContext(AdminContext);

  async function handleAdminLogin(event) {
    event.preventDefault();
    await axios
      .post(
        "http://localhost:4040/auth/admin/login",
        { username: adminUsername, password: adminPassword },
        { withCredentials: true }
      )
      .then((res) => {
        alert(res.data.message);
        console.log(res.data.message);
        setAdminUserNameContext(adminUsername);
        navigate("/viewExams");
      })
      .catch((error) => {
        alert("Something went wrong");
        console.log("Error Occured ", error.message);
      });
  }

  const navigate = useNavigate();

  return (
    <div className="flex h-[90vh] justify-center items-center bg-gray-100">
      <div className="flex flex-col w-[90%] max-w-lg mx-auto shadow-lg border border-gray-200 rounded-lg overflow-hidden bg-white p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Admin Login
        </h2>

        <form onSubmit={handleAdminLogin} className="flex flex-col space-y-6">
          {/* Username Field */}
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Admin Username
            </label>
            <input
              onChange={(e) => setAdminUsername(e.target.value)}
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
              onChange={(e) => setAdminPassword(e.target.value)}
              className="shadow border border-gray-300 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-blue-500 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
          >
            Admin Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
