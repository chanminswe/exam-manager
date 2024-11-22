const mongoose = require("mongoose");

const QuestionsSchma = mongoose.Schema(
  {
    examId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exams",
      required: true,
    },
    question: {
      type: String,
    },
    answers: {
      type: [String],
    },
    correctAnswer: {
      type: String,
    },
  },
  { timestamps: true }
);

const Questions = mongoose.model("Questions", QuestionsSchma);
module.exports = Questions;
