const express = require("express");
const dbConnection = require("./db/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

//PORT number
const PORT = process.env.PORT || 4040;

//to allow resource sharing
app.use(cors({
  
}));

//to see if code run
app.get("/", (req, res) => {
  res.send("The code is running ig!");
});

//to get data from frontend
app.use(express.json());

//routes for user authentication
app.use("/auth/user", require("./routes/routes-user/userAuthRoutes"));

app.listen(PORT, () => {
  console.log(`PORT ${PORT} has started!`);
  dbConnection();
});
