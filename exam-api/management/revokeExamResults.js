const Results = require("../models/exams/Results");

const revokeExamResults = async (req, res) => {
  try {
    const { studentId, examId } = req.body;

    const deleteResults = await Results.findOneAndDelete({ studentId, examId });

    if (!deleteResults) {
      return res
        .status(400)
        .json({ message: "Something went wrong while deleting result data" });
    }
    console.log(req.body);

    return res.status(200).json({ message: "Revoke sucessful" });
  } catch (error) {
    console.log(
      "Error Occured at revoke exam results under management folder",
      error
    );
    return res.status(500).json({ message: "Interval Server Error" });
  }
};

module.exports = revokeExamResults;
