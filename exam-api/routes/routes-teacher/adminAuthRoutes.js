const express = require("express");
const router = express.Router();
const adminLogin = require("../../auth/auth-admin/loginController");
const adminRegister = require("../../auth/auth-admin/registerController");

router.post("/login", adminLogin);

router.post("/register", adminRegister);

module.exports = router;
