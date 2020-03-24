const routes = require("express").Router();
const ProfileController = require("../controllers/ProfileController");

routes.get("/", ProfileController.getAllIncidentsFromOng);

module.exports = routes;
