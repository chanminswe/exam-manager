const Results = require("../models/exams/Results");
const Students = require("../models/roles/Users");
const Exams = require("../models/exams/Exams");
const Questions = require("../models/exams/Questions");

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
    const { examId, studentAnswers } = req.body;

    if (!examId || !studentAnswers) {
      return res
        .status(400)
        .json({ message: "Exam Id or Answers Unavailable" });
    }

    //get the student Id from the user token/cookie first
    const studentId = req.user._id;

    if (!studentId) {
      return res
        .status(400)
        .json({ message: "Student Id unavailable / or token expired!" });
    }

    // to get student Name :)
    const getStudent = await Students.findById(studentId);

    if (!getStudent) {
      return res
        .status(400)
        .json({ message: "Something went wrong fetching student Id !" });
    }

    const getExam = await Exams.findById(examId);

    if (!getExam) {
      return res
        .status(400)
        .json({ message: "Something went wrong fetching Exam Id !" });
    }

    //to check if the answers are correct

    const examQuestoins = await Questions.find(getExam.examName);

    examQuestoins.forEach((question) => {
      const studentAnswer = studentAnswers[question.question];
      if (studentAnswer === question.correctAnswer) {
        marks += 1;
      }
    });

    // const createResult = await Results.create({
    //   studentId,
    //   studentName: getStudent.username,
    //   examId,
    //   examName: getExam.examName,
    //   marks,
    // });

    console.log("our mark", marks);

    // if (!createResult) {
    //   return res
    //     .status(400)
    //     .json({ message: "Something went wrong while making result ! " });
    // }

    return res.status(201).json({ message: "Result successfully created ! " });
    // console.log(examId, studentId);

    return res.status(200).json({ message: "Calculate mark success" });
  } catch (error) {
    console.log("Error Occured at calculate marks !", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = calculateMarks;
