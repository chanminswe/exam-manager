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
  return (
    <div className="flex justify-center w-full bg-slate-200 h-[90vh]">
      <div className="flex justify-between w-[50%] border rounded-lg shadow-lg ">
        {examData.map((value, index) => (
          <div className="flex mt-4">
            {index === loop && (
              <>
                <h2 className="text-md font-semibold w-full">
                  {value.question}
                </h2>
                {/* <div className="flex flex-wrap w-full">
                  {value.answers.map((ans , ans_index) => (
                    <>
                    <label>{ans}</label>
                    </>
                    
                  ))}
                </div> */}
              </>
            )}
          </div>
        ))}
        <button onClick={() => setLoop(loop - 1)}>Prev</button>

        <button onClick={() => setLoop(loop + 1)}>Next</button>
      </div>
      <br />
      {examData.map((total, totalIndex) => (
        <div className=" ">
          <button onClick={() => setLoop(totalIndex)}>
            <div className="flex justify-center items-center max-w-10 max-h-10 p-5 border border-black font-semibold bg-teal-600 m-5 hover:scale-110">
              {totalIndex}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExamTest;
