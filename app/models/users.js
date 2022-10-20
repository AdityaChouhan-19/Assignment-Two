const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    username: String,
    //password: String,
    useremail: String
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("users", userModel);
