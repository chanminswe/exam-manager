const express = require("express");
const router = express.Router();
const adminLogin = require("../../auth/auth-admin/loginController");
const adminRegister = require("../../auth/auth-admin/registerController");
const createExam = require("../../management/createExams");
const adminVerify = require("../../middleware/admin_verify");
const viewExams = require("../../management/viewExams");
const createQuesiton = require("../../management/createQuestion");
const viewQuestions = require("../../management/viewQuestion");
const deleteQuestion = require("../../management/deleteQuestion");

router.post("/login", adminLogin);

//no ui for admin register
router.post("/register", adminRegister);

//to create Exam Name
//with admin verification middleware
router.post("/createExam", adminVerify, createExam);

//to create Exam Question
//with admin verification middleware
router.post("/createQuestion", adminVerify, createQuesiton);

//to view Exams as admi//with admin verification middleware
//with admin verification middleware
router.get("/viewExams", adminVerify, viewExams);

//to view Questions as admin
//with admin verification middleware
router.get("/viewQuestions", adminVerify, viewQuestions);

//to delete question as admin
//with admin verification middleware
router.post("/deleteQuestion", adminVerify, deleteQuestion);

module.exports = router;
