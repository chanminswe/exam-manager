const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("../../models/Users");

const loginUser = async (req, res) => {
  try {
    //to check if user input is valid
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    //to find if username exists
    const findUser = await Users.findOne({ username });

    //to check if credentials matched
    if (!findUser || !(await bcrypt.compare(password, findUser.password))) {
      return res
        .status(400)
        .json({ message: "User Not Found or Incorret Password" });
    }

    const token = jwt.sign(
      { _id: findUser._id, username: findUser._username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    //message if login sucessful
    return res.status(201).json(token);
  } catch (error) {
    console.log("Error Occured at loginUser", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = loginUser;
