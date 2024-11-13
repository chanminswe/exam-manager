import React from "react";
import { useParams } from "react-router-dom";

const Warning = () => {
  const { examName } = useParams();

  return (
    <div className="flex w-screen h-[90vh] items-center justify-center">
      <div className="flex flex-col justify-around border rounded-md h-32 px-5 py-2">
        <div className="mb-5">
          <p>
            Are you sure you want to answer - {" "}
            <span className="text-blue-500 font-semibold">{examName}</span>
          </p>
        </div>
        <div className="flex justify-between px-5 ">
          <button className="border px-3 py-2 rounded-md bg-teal-600 transition transform hover:scale-95">
            Continue
          </button>
          <button className="border px-3 py-2 rounded-md bg-red-500 transition transform hover:scale-95">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
