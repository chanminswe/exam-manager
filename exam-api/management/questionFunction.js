/* 
this is basically a function to create along the question data base 
what I am planning to do here is everytime the admin created an Exam with the name 
I will also create a Question DB in the back ,

My thought process was basically I just thought it would make things faster since am going to be using
free mongo db server and also free deployment sites which gonna reduce the performances in my opinion 
so i will be doing that to create serveral question table with the name of the exam name typed by the user while creating exam 

hopefully it works!
*/

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    examName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exams",
      required: true,
    },
    questions: {
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

const createDb = async (databasename) => {
  try {
    const dbname = databasename;
    mongoose.model(dbname, questionSchema);
  } catch (error) {
    console.log("Error occured at createDB", error);
  }
};
