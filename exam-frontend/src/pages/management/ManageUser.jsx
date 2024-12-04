import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ManageUser = () => {
  const [questions, setQuestions] = useState([]);
  const [changeCount, setChangeCount] = useState(0);
  const { examName } = useParams();

//   useEffect(() => {
//     async function getQuestions() {
//       try {
//         const response = await axios.post(
//           "http://localhost:4040/auth/admin/getUsers",
//           { examName },
//           { withCredentials: true }
//         );
//         setQuestions(response.data);
//       } catch (error) {
//         console.log("Error Occured At Get Questinos", error);
//       }
//     }

//     getQuestions();
//   }, [changeCount]);

  async function handleDelete(question) {
    try {
      const del_resp = await axios.post(
        "http://localhost:4040/auth/admin/deleteUser",
        { question },
        { withCredentials: true }
      );
      setChangeCount(changeCount + 1);
    } catch (error) {
      console.log("Error Occured");
    }
    console.log(question, "deleted");
  }

  return (
    <div className="flex justify-center mt-10 w-full h-auto">
      <div className="w-3/4 border shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center my-4">
          Questions for {examName}
        </h2>
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Question</th>
              <th className="px-4 py-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="px-4 py-2 border border-gray-300">
                  {item.question}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  <button
                    onClick={() => handleDelete(item.question)}
                    aria-label="Delete question"
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9L14.394 18m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
