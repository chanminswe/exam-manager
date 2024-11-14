import React, { useState } from "react";

const Results = () => {
  const [resultsLoading, setResultsLoading] = useState(false);

  return (
    <div className="flex justify-center h-[90vh] w-full">
      {resultsLoading ? (
        <div>Loading</div>
      ) : (
        <div className="flex w-[60%] h-[40vh] border border-gray-200 rounded-md shadow-2xl py-5 mt-20">
          {/* Left side of the result page*/}
          <div className="flex flex-col justify-around items-center text-center w-[30%] ">
            <div className="border w-[80%] h-[70%] border-red-300 m-2"></div>
            <p className="text-lg font-medium">Chan Min Swe</p>
          </div>

          {/* Right side of the result page */}
          <div className="flex flex-wrap justify-center items-center w-[70%] border-l-2 px-10">
            <h2 className="text-xl font-semibold mb-4">Exam Results</h2>
            <div className="flex w-full justify-between text-center">
              <div className="w-[45%] bg-gray-100 p-3 rounded-lg shadow-md">
                <p className="font-semibold text-lg">Score</p>
                <p className="text-2xl font-bold text-teal-600">60</p>
              </div>
              <div className="w-[45%] bg-gray-100 p-3 rounded-lg shadow-md">
                <p className="font-semibold text-lg">Grade</p>
                <p className="text-2xl font-bold text-teal-600">Pass</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
