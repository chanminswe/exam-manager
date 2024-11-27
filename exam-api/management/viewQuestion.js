const Questions = require("../models/exams/Questions");

const viewQuestions = async (req, res) => {
  try {
    const { examName } = req.body;

    if (!examName) {
      return res.status(400).json({
        message: "Couldn't get exam name",
      });
    }

    const getQuestions = await Questions.find({ examName });
    console.log("Questions retrieved:", getQuestions);

    if (!getQuestions) {
      return res.status(400).json({
        message: "Something went wrong while getting questions from database",
      });
    }

    return res.status(200).json(getQuestions);
  } catch (error) {
    console.log("Error Occured at View Questions function ", error.message);

    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = viewQuestions;
