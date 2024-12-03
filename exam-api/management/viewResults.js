const Results = require('../models/exams/Results');

const viewResults = async (req, res) => {
  try {
    const { examName } = req.body;
    if (!examName) {
      return res.status(400).json({ message: "Cannot get Exam Name !" });
    }

    const getStudentResults = await Results.find({ examName });

    if (getStudentResults.length === 0) {
      return res
        .status(404)
        .json({ message: "No results found for the specified exam." });
    }

    if (!getStudentResults) {
      return res
        .status(400)
        .json({ message: "Error Occured while getting student results " });
    }

    return res.status(200).json({ getStudentResults });
  } catch (error) {
    console.log("Error Occured at view results controller management ", error);
    return res.status(500).json({ message: "Internal Server Error ! " });
  }
};

module.exports = viewResults;
