const routes = require("express").Router();
const ongController = require("../controllers/OngController");

routes.get("/", ongController.getAllOngs);

routes.post("/create", ongController.createOng);

module.exports = routes;
