const { text } = require("body-parser");
const express = require("express");
const login = express.Router();
const path = require("path");
const rootDir = require("../util/path");

login.get("/login", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "login.html"));
});

login.post("/store", (req, res, next) => {
  console.log(req.body);
  const { username } = req.body;
  if (!username) {
    return res.status(400).send("username not found");
  }
  localStorage.setItem("username", username);
  return res.redirect("/");
});

module.exports = login;
