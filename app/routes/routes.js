/*
File name: routes.js
Creator: Aditya Chouhan
Student ID: 301215583
Date : 16 October; 2022
*/

const express = require("express");
const router = express.Router();

//Import controllerRoutes
const controllerRoutes = require("../controllers/controllers");

router.get("/", controllerRoutes.landingPage);

router.get("/homepage", controllerRoutes.landingPage);

router.get("/services", controllerRoutes.services);

router.get("/projects", controllerRoutes.projects);

router.get("/about", controllerRoutes.about);

router.get("/contact", controllerRoutes.contact);

router.get("/", controllerRoutes.landingPage);

//Export router
module.exports = router;
