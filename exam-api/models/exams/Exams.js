const mongoose = require("mongoose");

const ExamsSchema = mongoose.Schema(
  {
    examName: {
      type: String,
      required: true,
      unique: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teachers",
      required: true,
    },
  },
  { timestamps: true }
);

const Exams = mongoose.model("Exams", ExamsSchema);
module.exports = Exams;
