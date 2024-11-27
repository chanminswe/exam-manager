const Exams = require("../models/exams/Exams");

const createExams = async (req, res) => {
  try {
    const { examName } = req.body;

    const { username } = req.user;

    console.log(req.body, username);

    if (!examName) {
      return res.status(400).json({ message: "Exam name is necessary!" });
    }

    const findExistingExam = await Exams.findOne({ examName });

    if (findExistingExam) {
      return res
        .status(400)
        .json({ message: "Exam Name cannot be duplicated!" });
    }

    const createExam = await Exams.create({
      examName,
      createdBy: username,
    });

    if (!createExam) {
      return res.status(400).json({
        message: `Something went wrong while creating the exam ${examName} `,
      });
    }

    return res.status(201).json({ message: "Successfully created Exam" });
  } catch (error) {
    console.log("Error Occured at createExams ", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = createExams;
