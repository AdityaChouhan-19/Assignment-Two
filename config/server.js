/*
File name: server.js
Creator: Aditya Chouhan
Student ID: 301215583
Date : 16 October; 2022
*/
require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");

//Import routes
const routes = require("../app/routes/routes");

//Morgan setup
const morgan = require("morgan");
app.use(morgan("dev"));

//Mongoose setup
const mongoose = require("mongoose");

//Connect mongoose to the DB URI
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongodb = mongoose.connection;
mongodb.on("error", console.error.bind(console, "Connection Error:"));
mongodb.once("open", () => {
  console.log("Connected to MongoDB....");
});

//Setup default view wngine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../app", "views"));

//Middleware for routes
app.use("/", routes);

//Static file serving
app.use(express.static("public"));

module.exports = app;
