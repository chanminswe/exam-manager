import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Warning = () => {
  const { examName , id } = useParams();

  const navigate = useNavigate();

  function handleBack() {
    navigate("/exams");
  }

  function handleContinue() {
    navigate(`/exam/${encodeURIComponent(examName)}/${id}`);
  }

  return (
    <div className="flex w-screen h-[90vh] items-center justify-center">
      <div className="flex flex-col justify-around border rounded-md h-46 px-5 py-2">
        <div className="mb-5 text-center">
          <p>
            Are you sure you want to answer once you
            <br /> click continue the timer will start counting <br />
            Exam Name :
            <span className="text-blue-500 font-semibold text-center">
              {" "}
              {examName}
            </span>
          </p>
        </div>
        <div className="flex justify-between px-5 ">
          <button
            onClick={handleContinue}
            className="border px-3 py-2 rounded-md bg-teal-600 transition transform hover:scale-95"
          >
            Continue
          </button>
          <button
            onClick={handleBack}
            className="border px-3 py-2 rounded-md bg-red-500 transition transform hover:scale-95"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
