const express = require("express");
const app = express();
const bfhlRoute = require("./routes/bfhlRoute");

app.use(express.json());
app.use("/", bfhlRoute);

module.exports = app;
