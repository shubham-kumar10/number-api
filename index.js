const express = require("express");
const cors = require("cors");
const axios = require("axios");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: "GET, PUT",
};
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors(corsOptions));

app.get("/fact/:month/:day", (req, res, next) => {
  axios
    .get(
      `http://numbersapi.com/${req.params.month}/${req.params.day}/date?json`
    )
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/", (req, res, next) => {
  const obj = {
    isbn: "9781593275846",
    title: "Eloquent JavaScript, Second Edition",
    author: "Marijn Haverbeke",
    publish_date: "2014-12-14",
    publisher: "No Starch Press",
    numOfPages: "472",
  };
  res.json(obj);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
