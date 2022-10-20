/*
File name: routes.js
Creator: Aditya Chouhan
Student ID: 301215583
Date : 16 October; 2022
*/

const express = require("express");
const routes = express.Router();

//Import controllerRoutes
const controllerRoutes = require("../controllers/controllers");

routes.get("/", controllerRoutes.landingPage);

routes.get("/homepage", controllerRoutes.landingPage);

routes.get("/services", controllerRoutes.services);

routes.get("/projects", controllerRoutes.projects);

routes.get("/about", controllerRoutes.about);

routes.get("/contact", controllerRoutes.contact);

//Export routes
module.exports = routes;
