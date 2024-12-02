import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CreateExam from "./CreateExam";
import { toast } from "react-toastify";

const ViewExams = () => {
  const navigate = useNavigate();
  const [exams, setExams] = useState([]);
  const [count, setCount] = useState(0);
  const [openDropDown, setOpenDropDown] = useState(null);

  useEffect(() => {
    async function getExam() {
      try {
        const res = await axios.get(
          "http://localhost:4040/auth/admin/viewExams",
          { withCredentials: true }
        );

        if (!res.data.getExams || res.data.getExams.length === 0) {
          setExams([]);
        } else {
          setExams(res.data.getExams);
        }
      } catch (error) {
        console.log("Error Occurred", error);
        toast.error("Failed to load exams.");
      }
    }

    getExam();
  }, [count]);

  async function handleDelete(examName) {
    try {
      const deleteExam = await axios.post(
        "http://localhost:4040/auth/admin/deleteExam",
        { examName },
        { withCredentials: true }
      );
      toast.success("Exam deleted Successfully!");
      setCount(count + 1);
    } catch (error) {
      console.log("Error Occurred", error);
      toast.error("Failed to delete exam. Please try again.");
    }
  }

  function handleDropDown(index) {
    setOpenDropDown((prev) => (prev === index ? null : index));
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        <CreateExam count={setCount} />
      </h2>

      {exams.length > 0 ? (
        <div className="grid grid-cols-3 gap-6 w-full max-w-7xl my-6">
          {exams.map((value, index) => (
            <div
              key={index}
              className="relative h-36 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 my-5 flex flex-col justify-between"
            >
              <p className="text-lg font-semibold text-gray-800">
                {value.examName}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">{value.createdBy}</p>
                <button
                  onClick={() => handleDropDown(index)}
                  className="flex items-center border border-teal-400 rounded-md bg-teal-500 text-sm py-2 px-3 font-semibold transform transition-transform duration-200 hover:scale-105"
                >
                  Options
                  <svg
                    className="w-2.5 h-2.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {openDropDown === index && (
                  <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-gray-700">
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          navigate(
                            `/viewQuestions/${encodeURIComponent(
                              value.examName
                            )}`
                          )
                        }
                      >
                        View Questions
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          navigate(
                            `/createQuestion/${encodeURIComponent(
                              value.examName
                            )}`
                          )
                        }
                      >
                        Create Questions
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleDelete(value.examName)}
                      >
                        Delete Exam
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => setOpenDropDown(null)}
                      >
                        Cancel
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-64 text-gray-600">
          <h3>No exams available. Create one to get started.</h3>
        </div>
      )}
    </div>
  );
};

export default ViewExams;
