const mongoose = require("mongoose");

const QuestionsSchma = mongoose.Schema(
  {
    examName: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answers: {
      type: [String],
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Questions = mongoose.model("Questions", QuestionsSchma);
module.exports = Questions;
