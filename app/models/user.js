const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

let user = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required",
    },
    // password: {
    //   type: String,
    //   default: "",
    //   trim: true,
    //   required: "password is required",
    // },
    email: {
      type: String,
      default: "",
      trim: true,
      required: "email address is required",
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display Name is required",
    },
  },
  {
    collection: "users",
  }
);

//Configure options for User Model
let options = { missingPasswordError: "Wrong / Missing Password" };

user.plugin(passportLocalMongoose, options);

module.exports.user = mongoose.model("user", user);
