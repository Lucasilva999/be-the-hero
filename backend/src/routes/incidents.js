const routes = require("express").Router();
const incidentController = require("../controllers/IncidentController");

routes.get("/", incidentController.getAllIncidents);
routes.post("/", incidentController.createIncident);
routes.delete("/:id", incidentController.deleteIncident);

module.exports = routes;
