import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Exam = () => {
  const { examName, id } = useParams();
  const [loop, setLoop] = useState(0);
  const [results, setResults] = useState({});
  const [examData, setExamData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getQuestion() {
      try {
        const getq = await axios.post(
          "http://localhost:4040/auth/user/getQuestion",
          { examName },
          { withCredentials: true }
        );
        setExamData(getq.data);
      } catch (error) {
        console.log(error);
      }
    }

    getQuestion();
  }, []);

  const lengthData = examData.length;

  function handleNext() {
    setLoop((prevLoop) => (prevLoop + 1) % lengthData);
  }

  function handleBackward() {
    setLoop((prevLoop) => (prevLoop - 1 + lengthData) % lengthData);
  }

  function handleCheck(question, selectedAnswer) {
    setResults((prevResults) => ({
      ...prevResults,
      [question]: selectedAnswer, // Dynamically set the question name as the key
    }));
  }

  /*
  to end the exam and send it to 
  the backend
  questions : checked answers
  */
  async function endExam() {
    try {
      const examResult = await axios.post(
        "http://localhost:4040/auth/user/results",
        { examId: id, studentAnswers: results },
        { withCredentials: true }
      );
      console.log(examResult.data);
      const studentName = examResult.data.studentName;
      const grade = examResult.data.grade;
      const marks = examResult.data.marks;

      navigate(
        `/results/${encodeURIComponent(
          examName
        )}/${studentName}/${grade}/${marks}`,
        { replace: true }
      );
    } catch (error) {
      console.log("Error Occured at end Exam", error);
    }
  }

  /* To check if all the questions are answered */
  const isEveryQuestionAnswered =
    Object.keys(results).length === examData.length;

  return (
    <div className="flex flex-wrap w-full justify-center mt-5">
      <div className="flex items-center justify-between w-full">
        <div className="flex justify-center items-center  w-[50%] ">
          <h2 className="text-lg font-semibold ml-32 my-6 ">
            Exam Name : {examName}
          </h2>
        </div>
        <div className="flex justify-center items-center  w-[50%] m-5">
          {isEveryQuestionAnswered && (
            <button
              onClick={endExam}
              className="border rounded-md bg-teal-700  px-2 py-2 hover:scale-90"
            >
              End Exam
            </button>
          )}
        </div>
      </div>
      <br />
      {examData.map((lists, index) => (
        <div className="w-[60%] self-center" key={index}>
          {loop === index && (
            <div className="flex flex-wrap h-auto p-10 border border-gray-300 shadow-lg rounded-md mb-5">
              <h1 className="text-center w-full font-semibold text-lg">
                {lists.question}
              </h1>
              {lists.answers.map((ans, ind) => (
                <div key={ind} className="flex w-full my-5">
                  <input
                    onChange={() => handleCheck(lists.question, ans)}
                    name={lists.question}
                    type="radio"
                    className="mx-5"
                    checked={results[lists.question] === ans}
                  />
                  <p className="text-lg">{ans}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-around w-full mb-10">
        <button
          onClick={handleBackward}
          className="border rounded-md px-3 py-2 text-md bg-blue-400 text-gray-900 hover:scale-90"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="border rounded-md px-3 py-2 text-md bg-blue-400 text-gray-900 hover:scale-90"
        >
          Next
        </button>
      </div>
      <div className="flex flex-wrap justify-center w-[50%]">
        {examData.map((boxes, box_index) => {
          const isAnswered = results[boxes.question] !== undefined;
          return (
            <button onClick={() => setLoop(box_index)} key={box_index}>
              <div
                className={`flex justify-center items-center w-15 h-10 p-5 mx-5 border rounded-sm border-black
                ${isAnswered ? "bg-green-300" : "bg-white"}
                `}
              >
                <p>{box_index + 1}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Exam;
