import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewExamResults = () => {
  const [results, setResults] = useState([]);
  const { examName } = useParams();

  useEffect(() => {
    async function getQuestions() {
      try {
        const response = await axios.post(
          "http://localhost:4040/auth/admin/viewResults",
          { examName },
          { withCredentials: true }
        );
        if (response.data.message === "No results found") {
          setResults(null);
        } else {
          setResults(response.data.getStudentResults);
        }
      } catch (error) {
        console.log("Error Occured At Get Questions", error);
      }
    }
    getQuestions();
  }, []);

  {
    /* this needs fixing */
  }
  async function handleRevoke(studentId, examId) {
    try {
      const req = await axios.post(
        "http://localhost:4040/auth/admin/results",
        { studentId, examId },
        { withCredentials: true }
      );
      console.log(req.data.message);
    } catch (error) {
      console.log("Error Occured at frontend send request", error);
    }
  }

  return (
    <div className="flex justify-center mt-10 w-full h-auto">
      <div className="w-4/5 lg:w-3/4 border shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl font-bold text-center my-6 text-gray-800">
          Results for {examName}
        </h2>
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-teal-500 text-white">
            <tr>
              <th className="px-6 py-3 border border-gray-300 text-left">
                Student Name
              </th>
              <th className="px-6 py-3 border border-gray-300 text-left">
                Exam Name
              </th>
              <th className="px-6 py-3 border border-gray-300 text-left">
                Marks
              </th>
              <th className="px-6 py-3 border border-gray-300 text-left">
                Grade
              </th>
              <th className="px-6 py-3 border border-gray-300 text-center">
                Revoke
              </th>
            </tr>
          </thead>
          {results === null ? (
            <tbody className="mt-10">
              <tr>
                <td className="text-center">No Results for this exam yet</td>
              </tr> 
            </tbody>
          ) : (
            <tbody>
              {results.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-teal-100 transition-colors duration-300`}
                >
                  <td className="px-6 py-4 border border-gray-300">
                    {item.studentName}
                  </td>
                  <td className="px-6 py-4 border border-gray-300">
                    {item.examName}
                  </td>
                  <td className="px-6 py-4 border border-gray-300">
                    {item.marks}
                  </td>
                  <td className="px-6 py-4 border border-gray-300">
                    {item.grade}
                  </td>

                  <td className="px-6 py-4 border border-gray-300 text-center">
                    <button
                      onClick={() => handleRevoke(item.studentId, item.examId)}
                      aria-label="Delete question"
                      className="text-red-500 hover:text-red-700 transition-all duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ViewExamResults;
