const { text } = require("body-parser");
const express = require("express");
const login = express.Router();
login.get("/login", (req, res, next) => {
  res.send(
    "<form action='/store' method='post'><body><label >name:-</label><input  type='text'  name='username'/><button type='submit'>Add</button></body><form/>"
  );
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
