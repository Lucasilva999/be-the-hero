const routes = require("express").Router();

routes.get("/", (req, res, next) => {
  res.send("API Online");
});

module.exports = routes;
