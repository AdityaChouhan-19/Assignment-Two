/*
File name: routes.js
Creator: Aditya Chouhan
Student ID: 301215583
Date : 16 October; 2022
*/ 

const express = require('express');
const routes = express.Router();


//Import controllerRoutes
const controllerRoutes = require('../controllers/controllers');


const morgan = require('morgan');


routes.get('/', morgan("short"), controllerRoutes.landingPage);

routes.get('/homepage', morgan("short"), controllerRoutes.landingPage);

routes.get('/services', morgan("short"), controllerRoutes.services);

routes.get('/projects', morgan("short"), controllerRoutes.projects);

routes.get('/about', morgan("short"), controllerRoutes.about);

routes.get('/contact', morgan("short"), controllerRoutes.contact);


//Export routes
module.exports = routes;
