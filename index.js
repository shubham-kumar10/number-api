var express = require("express");
var app = express();
const axios = require("axios");
app.get("/fact/:month/:day", (req, res, next) => {
  axios
    .get(`http://numbersapi.com/${req.params.month}/${req.params.day}/date?json`)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
