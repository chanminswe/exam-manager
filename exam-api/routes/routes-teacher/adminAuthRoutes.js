const express = require("express");
const router = express.Router();
const adminLogin = require("../../auth/auth-admin/loginController");
const adminRegister = require("../../auth/auth-admin/registerController");
const createExam = require("../../management/createExams");

router.post("/login", adminLogin);

router.post("/register", adminRegister);

router.post("/createExam", createExam);

module.exports = router;
