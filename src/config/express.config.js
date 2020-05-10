const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('../api/routes/v1');

const app = express();

//mount api v1 routes
app.use('/api/v1', routes);

//CORS configuration
app.use(cors());

// parse body params and attache them to req.body
app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;