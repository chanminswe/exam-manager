const Exams = require("../models/exams/Exams");

const view_Exams = async (req, res) => {
  try {
    const getExams = await Exams.find();

    if (!getExams) {
      return res
        .status(400)
        .json({ message: "Error Occured while fetching exams" });
    }

    if (getExams.length === 0) {
      return res
        .status(200)
        .json({ message: "No exams are created currently" });
    }

    return res.status(200).json({ getExams });
  } catch (error) {
    console.log("Error Occured at Admin View Exams ", error.message);
    return res.status(500).json({ mesasge: "Internal Server Error" });
  }
};

module.exports = view_Exams;
