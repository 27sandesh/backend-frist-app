const express = require("express");
const nav = express.Router();
const { details } = require("../controllers/contactus");
const path = require("path");
nav.get("/contact-us", details);
nav.post("/sucess", (req, res, next) => {
  res.send("<h1>this sucess</h1>");
});

module.exports = nav;
