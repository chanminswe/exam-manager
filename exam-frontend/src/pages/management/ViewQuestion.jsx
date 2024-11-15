import React from "react";
import { useParams } from "react-router-dom";

const ViewQuestion = () => {
  const { examName } = useParams();

  return <div> View Questions : {examName} </div>;
};

export default ViewQuestion;
