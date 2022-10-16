const express = require('express');
const app = express();

const path = require('path');

const router = require('../app/routes/routes')


//Setup default view wngine to ejs
app.set('view engine', 'ejs');
app.set('views',  path.join(__dirname, '../app', 'views'));


app.use('/', router)

app.use(express.static('public'));

module.exports = app;