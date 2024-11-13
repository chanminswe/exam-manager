import React from "react";
import { useNavigate } from "react-router-dom";

const Exams = () => {
  const navigate = useNavigate();

  const info = [
    {
      createdBy: "Chan Min Swe",
      examName: "How React and React Native works",
    },
    {
      createdBy: "Chan Min Swe",
      examName: "Logic Building",
    },
    {
      createdBy: "John Doe",
      examName: "Java Local questions",
    },
    {
      createdBy: "Chan Min Swe",
      examName: "How React and React Native works",
    },
  ];

  function handleView(exam) {
    navigate(`/warning/${encodeURIComponent(exam.examName)}`);
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Exams</h2>
      <div className="grid grid-cols-4 gap-6 w-full max-w-5xl mt-6">
        {info.map((value, index) => (
          <div
            key={index}
            className="h-32 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col justify-between"
          >
            <p className="text-lg font-semibold text-gray-800">
              {value.examName}
            </p>
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">{value.createdBy}</p>
              <button
                onClick={() => handleView(value)}
                className="border border-teal-400 rounded-md bg-teal-500 text-sm py-2 px-3 font-semibold transform transition-transform duration-200 hover:scale-105"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exams;
