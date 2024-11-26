const Questions = require("../models/exams/Questions");

const deleteQuestion = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res
        .status(400)
        .json({ message: "Cannot Find the Question to delete" });
    }

    const findQuestion = await Questions.findOne({ question });
    if (!findQuestion) {
      return res.status(400).json({ message: "Couldnt delete the question" });
    }

    const deleteQuestion = await Questions.findByIdAndDelete(findQuestion._id);

    if (!deleteQuestion) {
      return res.status(400).json({ message: "Couldnt delete the question" });
    }

    return res.status(200).json({ message: "Sucessfully Deleted Question" });
  } catch (error) {
    console.log("Error Occured at delete Question Controller ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = deleteQuestion;
