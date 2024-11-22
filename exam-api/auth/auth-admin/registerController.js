const Teachers = require("../../models/Teachers");
const bcrypt = require("bcrypt");

const registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    //to avoid empty credentials
    if (!username || !password) {
      return res.status(401).json({ message: "all credentials are required!" });
    }

    //to make sure username is unique
    const existingUsername = await Teachers.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "username already exist" });
    }

    //crypting password
    const hashPassword = await bcrypt.hash(password, 10);
    const createAccount = await Teachers.create({
      username,
      password: hashPassword,
    });

    //account creating process to see if it worked
    if (!createAccount) {
      return res
        .status(400)
        .json({ message: "error occured while creating account" });
    }

    //registered successfully
    return res
      .status(201)
      .json({ message: `registered user ${username} sucessfully!` });
  } catch (error) {
    console.log("Error Occured at registerUser", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = registerAdmin;
