import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Exam = () => {
  const { examName } = useParams();
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [loading, setLoading] = useState(false);

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

  //this is for handling chose answer and the change in the answer if the user were to change it
  function handleAnswerSelection(question, chosenAnswer) {
    setSelectedAnswer((prevSelectedAnswer) => ({
      ...prevSelectedAnswer,
      [question]: chosenAnswer,
    }));
  }

  function submitExam() {}

  return (
    <div className="flex w-full bg-gray-100 font-semibold ">
      {loading ? (
        <div>Please wait while we are fetching exam data ! </div>
      ) : (
        <div className="border shadow-md w-[100%] m-5 p-10">
          <div className="flex flex-wrap justify-center items-center">
            {examData.map((value, index) => (
              <div key={value.question} className="w-full my-5 py-3">
                <p>{value.question}</p>
                {value.answers.map((answers, answersIndex) => (
                  <div key={answersIndex}>
                    <input
                      type="radio"
                      name={value.question}
                      checked={selectedAnswer[value.question] === answers}
                      className="m-1 py-3"
                      onChange={() =>
                        handleAnswerSelection(value.question, answers)
                      }
                    />
                    <label className="px-2 m-1">{answers}</label>
                    <br />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button className="border rounded-md px-3 py-2 bg-teal-600 hover:scale-95 ">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exam;
