const Users = require("../../models/Users");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { username, password, batchNumber } = req.body;

    //to avoid empty credentials
    if (!username || !password || !batchNumber) {
      return res.status(401).json({ message: "all credentials are required!" });
    }

    //to make sure username is unique
    const existingUsername = await Users.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "username already exist" });
    }

    //crypting password
    const hashPassword = bcrypt.hash(password, 10);
    const createAccount = await Users.create({
      username,
      password: hashPassword,
      batchNumber,
    });

    if (!createAccount) {
      return res
        .status(400)
        .json({ message: "error occured while creating account" });
    }

    return res.status(201).json({ message: "registered user sucessfully!" });
  } catch (error) {
    console.log("Error Occured at registerUser", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = registerUser;
