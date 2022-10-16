const express = require('express');
const routes = express.Router();
const controllerRoutes = require('../controllers/controllers');
const morgan = require('morgan');

routes.get('/', morgan("short"), controllerRoutes.landingPage);

module.exports = routes;
