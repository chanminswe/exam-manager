const express = require("express");
const router = express.Router();

//POST Method
//for registering user
router.post("/register", require("../../auth/auth-user/registerController"));

//POST METHOD
//for logging in user
router.post("/login", require("../../auth/auth-user/loginController"));

module.exports = router;
