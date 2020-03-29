const express = require("express");
const cors = require("cors");
const app = express();

const porta = process.env.PORTA || 3333;

const routes = require("./routes/routes");

const healthCheckRoute = require("./routes/health-check");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);
app.use("/health-check", healthCheckRoute);

app.listen(porta, () => console.log(`Ouvindo na porta ${porta}...`));
