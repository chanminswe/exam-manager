const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

//PORT number
const PORT = process.env.PORT || 4040;

//to see if code run
app.get("/", (req, res) => {
  res.send("The code is running ig!");
});

app.listen(PORT, () => {
  console.log(`PORT ${PORT} has started!`);
});
