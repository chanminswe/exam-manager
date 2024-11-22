import React from "react";
import { useParams } from "react-router-dom";

const CreateQuestion = () => {
  const { examName } = useParams();

  return (
    <div className="flex justify-center w-full h-auto py-10">
      <form className="flex flex-col w-1/3 border shadow-lg rounded-lg bg-white p-6">
        {/* Form Title */}
        <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
          Create a Question for "{examName}"
        </h2>
        {/* Question Input */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Question:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your question here"
          />
        </div>
        {/* Options Inputs */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Options:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Option 1"
          />
          <input
            className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Option 2"
          />
          <input
            className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Option 3"
          />
          <input
            className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Option 4"
          />
        </div>

        {/* Correct Option Input */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correct Option:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter the correct option"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="w-full bg-blue-500 text-white font-semibold rounded-md py-2 hover:bg-blue-600 transition-all"
        >
          Add Question
        </button>
      </form>
    </div>
  );
};

export default CreateQuestion;
