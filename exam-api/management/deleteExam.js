const Exams = require("../models/exams/Exams");

const deleteExam = async (req, res) => {
  try {
    const { examName } = req.body;

    if (!examName) {
      return res
        .status(400)
        .json({ message: "Couldn't find the exam name to delete!" });
    }

    const deleteEx = await Exams.findOneAndDelete({examName});

    if (!deleteEx) {
      return res
        .status(400)
        .json({ message: "Error Occured while deleting exam " });
    }

    return res.status(200).json({ message: "Exam deleted Sucessfully!" });
  } catch (error) {
    console.log("Error Occured at Delete Exam Controller ", error);
    return res.status(500).json({ message: "Internal Server Error !" });
  }
};

module.exports = deleteExam;