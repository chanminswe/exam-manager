const Questions = require("../models/exams/Questions");

const createQuestion = async (req, res) => {
  try {
    const { examName , question, answers, correctAnswer } = req.body;

    console.log(req.body);

    if ((!examName, !question, !answers, !correctAnswer)) {
      return res
        .status(400)
        .json({ message: "Missing All the neccessary data" });
    }

    const createQuestion = await Questions.create({
      examName,
      question,
      answers,
      correctAnswer,
    });

    if (!createQuestion) {
      return res
        .status(400)
        .json({ message: "Error Occured While Creating the question" });
    }

    return res.status(201).json({ message: "Question Created Successfully!" });
  } catch (error) {
    console.log("Error Occured at Create Question", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = createQuestion;
