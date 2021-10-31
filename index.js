const express = require('express');
const cors = require('cors');
const axios = require('axios');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  methods: 'GET, PUT'
};
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors(corsOptions));

app.get('/fact/:month/:day', (req, res) => {
  axios
    .get(`http://numbersapi.com/${req.params.month}/${req.params.day}/date?json`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/trivia/:number', (req, res) => {
  axios
    .get(`http://numbersapi.com/${req.params.number}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/math/:number', (req, res) => {
  axios
    .get(`http://numbersapi.com/${req.params.number}/math?json`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/random/:value', (req, res) => {
  axios
    .get(`http://numbersapi.com/random/${req.params.value}?json`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
