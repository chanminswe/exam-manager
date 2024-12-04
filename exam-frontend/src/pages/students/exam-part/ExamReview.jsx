import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ExamReview = () => {
  const { studentName , examName} = useParams();
  const [loop, setLoop] = useState(0);
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



  return (
    <div className="flex flex-wrap w-full justify-center mt-5">
      <div className="flex items-center justify-between w-full">
        <div className="flex justify-center items-center  w-[50%] ">
          <h2 className="text-lg font-semibold ml-32 my-6 ">
            Exam Name : {examName}
          </h2>
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
                  <p className={`text-lg w-full rounded-md py-1 px-1 ${ans === lists.correctAnswer ? "bg-green-200" : "bg-red-300"}`}>{ans}</p>
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
    </div>
  );
};

export default ExamReview;