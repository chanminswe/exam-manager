import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const CreateExam = ({ count }) => {
  const [examName, setExamName] = useState("");
  const navigate = useNavigate();
  async function handleCreateExam(event) {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4040/auth/admin/createExam",
        { examName },
        { withCredentials: true }
      );
      setExamName("");
      count(count + 1);
      toast.success("Exam Created Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  function handleManage() {
    navigate("/manageUsers");
  }

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-50% h-auto border-2 rounded-lg shadow-lg">
        <form onSubmit={handleCreateExam}>
          <div className="flex  flex-wrap justify-center mt-3">
            <label className="m-4 w-full text-sm text-gray-800">
              Exam Name :{" "}
            </label>
            <input
              onChange={(event) => setExamName(event.target.value)}
              placeholder="Exam Name"
              className="w-[80%] border-2 rounded-lg  border-green-600 shadow-sm p-1 text-sm"
            />
          </div>
          <div className="flex flex-wrap justify-around mt-8">
            <button
              type="submit"
              className="border p-2 mb-4 rounded-lg bg-blue-400 text-sm hover:scale-110"
            >
              create
            </button>
            <button
              onClick={handleManage}
              className="border p-2 mb-4 rounded-lg bg-blue-400 text-sm hover:scale-110"
            >
              manage
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateExam;
