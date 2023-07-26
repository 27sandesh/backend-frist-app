const express = require("express");
const path = require("path");
const router = express.Router();
router.get("/Home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "admin.html"));
});
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
  res.send("<h1>this is a default</h1>");
});
module.exports = router;
