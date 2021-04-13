'use strict';

const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World Version 1');
});


// place holder for the data
const votes = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/votes', (req, res) => {
  console.log('api/votes called!')
  res.json(votes);
});

app.get('/api/resetvotes', (req, res) => {
  console.log('api/resetvotes called!')
  votes.slice(0,votes.length-1);
  res.json(votes);
});

app.post('/api/vote', (req, res) => {
  const vote = req.body.vote;
  console.log('Adding vote:::::', vote);
  votes.push(vote);
  res.json("vote recorded");
});

app.get('/api/index', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
