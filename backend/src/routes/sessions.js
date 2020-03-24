const routes = require("express").Router();
const SessionsController = require("../controllers/SessionsController");

routes.post("/", SessionsController.createSession);

module.exports = routes;
