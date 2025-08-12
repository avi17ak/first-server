const express = require("express");

const fruitsRouter = express.Router();
const fruitsController = require("../controllers/fruits");

fruitsRouter.get("/", fruitsController.index);
fruitsRouter.get("/:name", fruitsController.show);
fruitsRouter.post("/", fruitsController.create);
fruitsRouter.patch("/:name", fruitsController.update);
fruitsRouter.delete("/:name", fruitsController.destroy)


module.exports = { fruitsRouter };
