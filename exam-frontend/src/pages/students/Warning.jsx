import React from "react";

const Warning = () => {
  const exam = "dummy exam";

  return (
    <div className="flex w-screen h-[90vh] items-center justify-center">
      <div className="flex flex-col justify-around border rounded-md h-32 px-5 py-2">
        <div className="mb-5">
          Warning ! Are you sure you want to answer {exam} !
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
