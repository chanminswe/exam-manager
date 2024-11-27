import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateQuestion = () => {
  const { examName } = useParams();
  const [question, setQuestion] = useState("");
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  async function createQuestion(event) {
    event.preventDefault();

    try {
      // Create the answers array directly inside the function, using the individual states.
      const answers = [answerOne, answerTwo, answerThree, answerFour];

      // Submit the question and answers to the backend.
      const resp = await axios.post(
        "http://localhost:4040/auth/admin/createQuestion",
        {
          examName,
          question,
          answers,
          correctAnswer,
        },
        { withCredentials: true }
      );

      toast.success("Question Created Successfully");

      // Reset form fields after successful submission
      setQuestion("");
      setAnswerOne("");
      setAnswerTwo("");
      setAnswerThree("");
      setAnswerFour("");
      setCorrectAnswer("");
    } catch (error) {
      console.log("Error occurred:", error);
    }
  }

  return (
    <div className="flex justify-center w-full h-auto py-10">
      <form
        onSubmit={createQuestion}
        className="flex flex-col w-1/3 border shadow-lg rounded-lg bg-white p-6"
      >
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
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your question here"
          />
        </div>

        {/* Options Inputs */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Answers :
          </label>
          <input
            value={answerOne}
            onChange={(event) => setAnswerOne(event.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Option 1"
          />
          <input
            value={answerTwo}
            onChange={(event) => setAnswerTwo(event.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Option 2"
          />
          <input
            value={answerThree}
            onChange={(event) => setAnswerThree(event.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Option 3"
          />
          <input
            value={answerFour}
            onChange={(event) => setAnswerFour(event.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Option 4"
          />
        </div>

        {/* Correct Option Input */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correct Answer:
          </label>
          <input
            value={correctAnswer}
            onChange={(event) => setCorrectAnswer(event.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter the correct option"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold rounded-md py-2 hover:bg-blue-600 transition-all"
        >
          Add Question
        </button>
      </form>
    </div>
  );
};

export default CreateQuestion;
