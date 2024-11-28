import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ExamTest = () => {
  const { examName } = useParams();
  const [loop, setLoop] = useState(0);

  const examData = [
    {
      question: "What is React?",
      answers: [
        "JavaScript Library",
        "Java Library",
        "Tailwind Framework",
        "CSS Framework",
      ],
      correctAnswer: "JavaScript Library",
    },
    {
      question: "Which of the following is a JavaScript runtime environment?",
      answers: ["React", "Node.js", "Angular", "Vue.js"],
      correctAnswer: "Node.js",
    },
    {
      question: "What does CSS stand for?",
      answers: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Cascading Simple Sheets",
        "Common Style Sheets",
      ],
      correctAnswer: "Cascading Style Sheets",
    },
    {
      question: "Which tag is used to define a hyperlink in HTML?",
      answers: ["<a>", "<link>", "<hyperlink>", "<url>"],
      correctAnswer: "<a>",
    },
    {
      question:
        "Which method is used to add an item to an array in JavaScript?",
      answers: ["push()", "add()", "append()", "insert()"],
      correctAnswer: "push()",
    },
    {
      question: "What is the correct way to declare a function in JavaScript?",
      answers: [
        "function myFunction()",
        "function = myFunction()",
        "declare function myFunction()",
        "myFunction() function",
      ],
      correctAnswer: "function myFunction()",
    },
  ];

  let lengthData = examData.length;

  function handleNext() {
    setLoop((prevLoop) => (prevLoop + 1) % lengthData);
  }

  function handleBackward() {
    setLoop((prevLoop) => (prevLoop - 1 + lengthData) % lengthData);
  }

  return (
    <div className="flex flex-wrap w-full justify-center mt-10   ">
      {examData.map((lists, index) => (
        <div className="w-[60%]" key={index}>
          {loop === index && (
            <div className="flex flex-wrap  h-auto p-10 border border-gray-300 shadow-lg rounded-md mb-10">
              <h1 className="text-center w-full font-semibold text-lg">
                {lists.question}
              </h1>
              {lists.answers.map((ans, ind) => (
                <div key={ind} className="flex w-full my-5 ">
                  <input id={ind} type="radio" className="mx-5" />
                  <p className="text-lg">{ans}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-around w-full mb-10 ">
        <button
          onClick={handleBackward}
          className="border rounded-md px-3  py-2 text-md bg-blue-400 text-gray-900 hover:scale-90"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="border rounded-md px-3  py-2 text-md bg-blue-400 text-gray-900 hover:scale-90"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ExamTest;
