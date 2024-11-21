const express = require("express");
const dbConnection = require("./db/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

//PORT number
const PORT = process.env.PORT || 4040;

//to save cookie Browser
app.use(cookieParser());

//to allow resource sharing
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//to see if code run
app.get("/", (req, res) => {
  res.send("The code is running ig!");
});

//to get data from frontend
app.use(express.json());

//routes for user authentication
app.use("/auth/user", require("./routes/routes-user/userAuthRoutes"));

//routes for admin authentication
app.use("/auth/admin", require("./routes/routes-teacher/adminAuthRoutes"));

app.listen(PORT, () => {
  console.log(`PORT ${PORT} has started!`);
  dbConnection();
});
