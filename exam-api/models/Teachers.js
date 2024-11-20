const { mongoose } = require("mongoose");

const TeacherSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Teachers = mongoose.model("Teachers", TeacherSchema);
module.exports = Teachers;
