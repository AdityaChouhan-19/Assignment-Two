const express = require("express");
const router = express.Router();

module.exports.landingPage = (req, res, next) => {
    res.render("homepage", {
        title: "Homepage"
    });
};