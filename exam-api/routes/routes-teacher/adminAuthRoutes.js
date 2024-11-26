const express = require("express");
const router = express.Router();
const adminLogin = require("../../auth/auth-admin/loginController");
const adminRegister = require("../../auth/auth-admin/registerController");
const createExam = require("../../management/createExams");
const adminVerify = require("../../middleware/admin_verify");
const viewExams = require("../../management/viewExams");
const createQuesiton = require("../../management/createQuestion");
const viewQuestions = require("../../management/viewQuestion");


router.post("/login", adminLogin);

//no ui for admin register 
//have to create account from postman and ever again !
router.post("/register", adminRegister);

//to create Exam Name
router.post("/createExam", adminVerify, createExam);

//to create Exam Question
router.post("/createQuestion", adminVerify, createQuesiton);

//to view Exams as admin
router.get("/viewExams", adminVerify, viewExams);

//to view Questions as admin
router.get("/viewQuestions", adminVerify, viewQuestions);

module.exports = router;
