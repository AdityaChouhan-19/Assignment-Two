const mongoose = require("mongoose");

const contactModel = mongoose.Schema(
  {
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number,
  },
  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("contacts", contactModel);
