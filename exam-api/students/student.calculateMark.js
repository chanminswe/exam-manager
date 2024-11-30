const Results = require("../models/exams/Results");

/* 
This page is basically to calcualte marks
first we will accept the studentUsername / studentId to create in the database;
And the Also the examName that the Button was clicked is from 

WHEN -
I am thinking about running this code when the frontend clicked the end exam button

*/

const calculateMarks = async (req, res) => {
  try {
    let marks = 0;
    const { examId } = req.body;

    //get the student Id from the user token/cookie first
    const { studentId } = req.user;

    console.log(examId, studentId);
  } catch (error) {
    console.log("Error Occured at calculate marks !", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
