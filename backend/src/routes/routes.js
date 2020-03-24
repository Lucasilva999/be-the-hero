const routes = require("express").Router();

const ongRoutes = require("./ongs");
const incidentRoutes = require("./incidents");
const profileRoutes = require("./profiles");
const sessionRoutes = require("./sessions");

routes.use("/ongs", ongRoutes);
routes.use("/incidents", incidentRoutes);
routes.use("/profile", profileRoutes);
routes.use("/session", sessionRoutes);

module.exports = routes;
