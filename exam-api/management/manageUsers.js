const Users = require("../models/roles/Users");

const viewUsers = async (req, res) => {
  try {
    const getStudents = await Users.find();

    if (!getStudents) {
      return res
        .status(400)
        .json({ message: "Error Occured while getting student data" });
    }

    return res.status(200).json(getStudents);
  } catch (error) {
    console.log("Error Occured at manage Users", error);
    return res.status(500).json({ message: "Internal Server Error !" });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const { studentId } = req.body;

    console.log(studentId);

    if (!studentId) {
      return res.status(400).json({ message: "Cannot get student Id" });
    }

    const deleteStudent = await Users.findByIdAndDelete(studentId);

    if (!deleteStudent) {
      return res
        .status(400)
        .json({ message: "Something went wrong while deleting Student" });
    }

    return res
      .status(200)
      .json({ message: `Something went wrong while deleting student` });
  } catch (error) {
    console.log("Error Occured while deleting Users", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { viewUsers, deleteUsers };
