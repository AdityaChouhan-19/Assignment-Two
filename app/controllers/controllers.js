/*
File name: controllers.js
Creator: Aditya Chouhan
Student ID: 301215583
Date : 16 October; 2022
*/

const express = require("express");
const router = express.Router();

module.exports.landingPage = (req, res, next) => {
  res.render("homepage", {
    title: "Homepage",
  });
};

module.exports.services = (req, res, next) => {
  res.render("services", {
    title: "Services",
  });
};

module.exports.projects = (req, res, next) => {
  res.render("projects", {
    title: "Projects",
  });
};

module.exports.contact = (req, res, next) => {
  res.render("contact", {
    title: "Contact",
  });
};

module.exports.about = (req, res, next) => {
  res.render("about", {
    title: "About ME!",
  });
};

