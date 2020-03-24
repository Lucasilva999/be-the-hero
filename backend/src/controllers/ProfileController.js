const connection = require("../database/connection");

exports.getAllIncidentsFromOng = async (req, res) => {
  const ong_id = req.headers.authorization;

  const incidents = await connection("incidents")
    .where("ong_id", ong_id)
    .select("*");

  return res.json(incidents);
};