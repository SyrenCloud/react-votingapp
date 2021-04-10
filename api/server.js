const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

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

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});