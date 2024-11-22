const jwt = require("jsonwebtoken");
const Teachers = require("../../models/roles/Teachers");
const bcrypt = require("bcrypt");

/* 
This page is basically for admin login , I use json web token for valid login and 
return cookie for sucessful login
*/
const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    //to check if credentials are empty
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "All credentials are necessary!" });
    }

    //to avoid wrong password and username
    const findUsername = await Teachers.findOne({ username });

    if (
      !findUsername ||
      !(await bcrypt.compare(password, findUsername.password))
    ) {
      return res.status(400).json({ message: "Incorrect Credentials" });
    }

    const token = jwt.sign(
      {
        _id: findUsername._id,
        username: findUsername.username,
      },
      process.env.JWT_SECRET_ADMIN,
      { expiresIn: "1d" }
    );

    //sending admins cookies for successful login :0
    res.cookie("authAdminToken", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ message: "Admin Login Successful!" });
  } catch (error) {
    console.log("Error Occured At LoginAdmin", error.message);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = loginAdmin;
