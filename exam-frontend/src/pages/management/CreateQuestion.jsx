import React from "react";
import { useParams } from "react-router-dom";

const CreateQuestion = () => {
  const { examName } = useParams();

  return <div>CreateQuestion {examName}</div>;
};

export default CreateQuestion;
