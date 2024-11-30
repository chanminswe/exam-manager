const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Students",
    required: true,
  },
  studentName: {
    type: String,
  },
  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exams",
    required: true,
  },
  examName: {
    type: String,
  },
  marks: {
    type: Number,
    required: true,
  },
});

const Results = mongoose.model("Results", ResultSchema);
module.exports = Results;
