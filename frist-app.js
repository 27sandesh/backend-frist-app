const http = require("http");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const AdminRoutes = require("./routes/admin");
const ShopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/Admin", AdminRoutes);
app.use(ShopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not Found</h1>");
});

const server = http.createServer(app);
server.listen(4000);
