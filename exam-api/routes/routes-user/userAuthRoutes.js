const express = require("express");
const router = express.Router();
const userVerify = require("../../middleware/user_verify");

//POST Method
//for registering user
router.post("/register", require("../../auth/auth-user/registerController"));

//POST METHOD
//for logging in user
router.post("/login", require("../../auth/auth-user/loginController"));

router.post(
  "/getQuestion",
  userVerify,
  require("../../students/students.viewQuestions")
);

router.get(
  "/getExams",
  userVerify,
  require("../../students/student.viewExams")
);

module.exports = router;
