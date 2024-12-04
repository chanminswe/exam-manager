import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Results = () => {
  const { examName, studentName, grade, marks } = useParams();
  const [resultsLoading, setResultsLoading] = useState(false);
  const navigate = useNavigate();

  // to review page for students
  function handleReviewButton() {
    if (grade != "undefined") {
      navigate(
        `/examReview/${encodeURIComponent(studentName)}/${encodeURIComponent(
          examName
        )}`
      );
    } else {
      toast.error("Couldn't review something went wrong !");
    }
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh] bg-gray-50">
      {resultsLoading ? (
        <div className="text-lg font-medium text-gray-600">Loading...</div>
      ) : (
        <div className="flex flex-col w-[90%] max-w-[600px] bg-white border border-gray-300 rounded-lg shadow-xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Exam Results
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <ResultCard title="Score" value={marks} />
            <ResultCard title="Grade" value={grade} />
            <ResultCard title="Student Name" value={studentName} />
            <ResultCard title="Exam Name" value={examName} />
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-center my-10">
        <div className="w-full mb-3">
          <p className="text-center">Click to review your mistakes !</p>
        </div>
        <button
          onClick={handleReviewButton}
          className="border border-teal-700 rounded-md bg-teal-500 py-2 px-2 hover:scale-105 "
        >
          Review
        </button>
      </div>
    </div>
  );
};

const ResultCard = ({ title, value }) => (
  <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-sm">
    <p className="text-sm font-medium text-gray-600">{title}</p>
    <p
      className={`text-xl font-bold  ${
        value === "fail" ? "text-red-600" : "text-teal-600"
      }  `}
    >
      {value}
    </p>
  </div>
);

export default Results;
