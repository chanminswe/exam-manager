import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Exam = () => {
  const { examName } = useParams();
  const [loading, setLoading] = useState(false);

  return (
    <div className="text-center font-semibold mx-auto">
      {loading ? (
        <div>Please wait while we are fetching exam data ! </div>
      ) : (
        <div>{examName} started !</div>
      )}
    </div>
  );
};

export default Exam;
