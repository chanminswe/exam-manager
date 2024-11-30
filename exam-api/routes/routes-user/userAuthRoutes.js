const express = require("express");
const router = express.Router();
const userVerify = require("../../middleware/user_verify");
const view_Exams = require("../../students/student.viewExams");
const view_Questions = require("../../students/students.viewQuestions");

//POST Method
//for registering user
router.post("/register", require("../../auth/auth-user/registerController"));

//POST METHOD
//for logging in user
router.post("/login", require("../../auth/auth-user/loginController"));

//POST METHOD
//to view the questions in the selected exam
router.post("/getQuestion", userVerify, view_Questions);

//GET METHOD
//to view available Exams to answer
router.get("/getExams", userVerify, view_Exams);

//POST METHOD
//for exam results
router.post('/results' , userVerify ,  require('../../students/student.calculateMark'))

module.exports = router;
