/*
File name: index.js
Creator: Aditya Chouhan
Student ID: 301215583
Date : 16 October; 2022
*/ 

const app = require('./config/server');


const PORT = (process.env.PORT || 3001);
app.listen(PORT);