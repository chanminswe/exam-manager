import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateExam = ({ count }) => {
  const [examName, setExamName] = useState("");
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

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-50% h-[20vh] border-2 rounded-lg shadow-lg">
        <form onSubmit={handleCreateExam}>
          <div className="flex flex-wrap justify-center mt-5">
            <label className="m-3 w-full text-sm text-gray-800">
              Exam Name :{" "}
            </label>
            <input
              onChange={(event) => setExamName(event.target.value)}
              placeholder="Exam Name"
              className="w-[80%] border-2 rounded-lg  border-green-600 shadow-sm p-1 text-sm"
            />
          </div>
          <div className="flex flex-wrap justify-center mt-5">
            <button
              type="submit"
              className="border p-2 rounded-lg bg-blue-400 text-sm hover:scale-110"
            >
              create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateExam;
