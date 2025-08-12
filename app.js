const express = require("express");
const app = express();

app.use(express.json()) 

const logger = require('./logger')
const { fruitsRouter } = require("./routes/fruits");

app.use(logger)
app.use("/fruits", fruitsRouter)

module.exports = {
  app,
};
