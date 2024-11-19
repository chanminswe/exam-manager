const mongoose = require("mongoose");


const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    if (connection) {
      console.log("Database Connected Successfully");
    }
  } catch (error) {
    console.error("Error Occured While Connecting to Database", error.message);
    process.exit(1);
  }
};

module.exports = dbConnection;
