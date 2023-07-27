const path = require("path");
exports.details = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "nav.html"));
};
