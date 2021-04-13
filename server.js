'use strict';

const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");

// place holder for the data
const votes = [];


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello World Version Updated');
});

app.get('/votes', (req, res) => {
  res.send('Hello World Version votes');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
