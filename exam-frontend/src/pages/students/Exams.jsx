import React from "react";

const Exams = () => {
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

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Exams</h2>
      <div className="grid grid-cols-4 gap-6 w-full max-w-5xl">
        {info.map((value, index) => (
          <div
            key={index}
            className="h-32 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col justify-between transform transition-transform duration-200 hover:scale-105"
          >
            <p className="text-lg font-semibold text-gray-800">
              {value.examName}
            </p>
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">{value.createdBy}</p>
              <button className="border border-green-600 rounded-md bg-teal-500 text-sm py-1 px-2 font-semibold">
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
