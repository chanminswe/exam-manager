const express = require("express");
const router = express.Router();
const adminLogin = require("../../auth/auth-admin/loginController");
const adminRegister = require("../../auth/auth-admin/registerController");
const createExam = require("../../management/createExams");
const adminVerify = require("../../middleware/admin_verify");
const viewExams = require("../../management/viewExams");
const createQuesiton = require("../../management/createQuestion");

router.post("/login", adminLogin);

router.post("/register", adminRegister);

//to create Exam Name
router.post("/createExam", adminVerify, createExam);

//to create Exam Question
router.post("/createQuestion", adminVerify, createQuesiton);

//to view Exams as admin
router.get("/viewExams", adminVerify, viewExams);

module.exports = router;
