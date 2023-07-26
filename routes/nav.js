const express = require("express");
const nav = express.Router();
const path = require("path");
nav.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "nav.html"));
});
nav.post("/sucess", (req, res, next) => {
  res.send("<h1>this sucess</h1>");
});

module.exports = nav;
