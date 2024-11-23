const mongoose = require("mongoose");

const ExamsSchema = mongoose.Schema(
  {
    examName: {
      type: String,
      required: true,
      unique: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Exams = mongoose.model("Exams", ExamsSchema);
module.exports = Exams;
