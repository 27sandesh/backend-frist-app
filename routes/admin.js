const express = require("express");
const router = express.Router();
router.get("/Home", (req, res, next) => {
  res.send(
    "<form action='/product'><input type='Text' name='title'/><button type='submit'>Add</button></form>"
  );
});
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
  res.send("<h1>this is a default</h1>");
});
module.exports = router;
