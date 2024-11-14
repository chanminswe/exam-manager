import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fscreen from "fscreen";

const Exam = () => {
  const { examName } = useParams();
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [loading, setLoading] = useState(false);
  const [isfullscreen, setIsFullScreen] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (fscreen.fullscreenEnabled) {
      fscreen.requestFullscreen(document.documentElement);
      setIsFullScreen(true);
    }

    const handleFullscreenChange = () => {
      if (!fscreen.fullscreenElement) {
        setIsFullScreen(false);
      }
    };

    fscreen.addEventListener("fullscreenchange", handleFullscreenChange);

    // Clean up event listener on component unmount
    return () => {
      fscreen.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  //this is for handling chose answer and the change in the answer if
  //the user were to change it
  function handleAnswerSelection(question, chosenAnswer) {
    setSelectedAnswer((prevSelectedAnswer) => ({
      ...prevSelectedAnswer,
      [question]: chosenAnswer,
    }));
  }

  function reEnterFullScreen() {
    fscreen.requestFullscreen(document.documentElement);
    setIsFullScreen(true);
  }
  //event occured when you submit exam
  function submitExam() {
    console.log(selectedAnswer);
    navigate("/results");
  }

  return (
    <div className="flex w-full bg-gray-100 font-semibold ">
      {loading ? (
        <div>Please wait while we are fetching exam data ! </div>
      ) : isfullscreen ? (
        <div className="border shadow-md w-[100%] m-5 p-10">
          <p className="font-semibold text-2xl text-green-600">{examName}</p>
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
            <button
              onClick={submitExam}
              className="border rounded-md px-3 py-2 bg-teal-600 hover:scale-95 "
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap flex-col w-full h-[90vh] items-center justify-center">
          <div className="my-5">
            <p>Please Enter Full Screen to continue answering the exam</p>
          </div>
          <div className="my-5">
            <button
              className="border py-2 px-3 rounded-md bg-red-500 font-semi bold text-sm hover:scale-90"
              onClick={reEnterFullScreen}
            >
              Re-Enter FullScreen
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exam;
