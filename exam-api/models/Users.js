const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    batchNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model( "Users" , UserSchema);
module.exports = Users;
