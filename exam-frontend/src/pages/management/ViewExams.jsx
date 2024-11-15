import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewExams = () => {
  const navigate = useNavigate();
  const [openDropDown, setOpenDropDown] = useState(null);

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
    {
      createdBy: "John Doe",
      examName: "Java Local questions",
    },
    {
      createdBy: "John Doe",
      examName: "Java Local questions",
    },
  ];

  function handleView(exam) {
    navigate(`/warning/${encodeURIComponent(exam.examName)}`);
  }

  function handleDropDown(index) {
    setOpenDropDown(openDropDown === index ? null : index);
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Every Created Exams
      </h2>

      <div className="grid grid-cols-4 gap-6 w-full max-w-7xl my-6">
        {info.map((value, index) => (
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
                          `/viewQuestions/${encodeURIComponent(value.examName)}`
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
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewExams;
