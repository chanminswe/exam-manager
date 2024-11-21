const jwt = require("jsonwebtoken");
const Teachers = require("../../models/Teachers");
const bcrypt = require("bcrypt");

const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(req.body);

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: "All credentials are necessary!" });
    }

    // Find teacher by username
    const findUsername = await Teachers.findOne({ username });
    if (!findUsername) {
      return res.status(400).json({ message: "Incorrect Credentials" });
    }

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, findUsername.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect Credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        _id: findUsername._id,
        username: findUsername.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Send cookie
    res.cookie("authAdminToken", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(200).json({ message: "Admin Login Successful!" });
  } catch (error) {
    console.error("Error Occurred at LoginAdmin:", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = loginAdmin;
