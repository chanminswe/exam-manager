import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Exams = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function getExam() {
      try {
        const res = await axios.get(
          "http://localhost:4040/auth/user/getExams",
          { withCredentials: true }
        );

        console.log(res.data.getExams);
        if (!res.data.getExams || res.data.getExams.length === 0) {
          setMessage("No available exam at the moment :(");
        } else {
          setInfo(res.data.getExams);
          setMessage(null); // Clear message if exams exist
        }
      } catch (error) {
        console.log("Error Occured ", error);
      }
    }

    getExam();
  }, []);

  function handleView(examName, id) {
    navigate(`/warning/${encodeURIComponent(examName)}/${id}`);
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Exams</h2>

      {/*Looping all the exams available to take so far!*/}
      {info.length > 0 ? (
        <div className="grid grid-cols-4 gap-6 w-full max-w-5xl mt-6">
          {info.map((value, index) => (
            <div
              key={index}
              className="h-32 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col justify-between"
            >
              <p className="text-lg items-center font-semibold text-gray-800">
                {value.examName}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">{value.createdBy}</p>
                <button
                  onClick={() => handleView(value.examName, value._id)}
                  className="border border-teal-400 rounded-md bg-teal-500 text-sm py-2 px-3 font-semibold transform transition-transform duration-200 hover:scale-105"
                >
                  Answer
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h3 className="text-lg">{message}</h3>
        </div>
      )}
    </div>
  );
};

export default Exams;
