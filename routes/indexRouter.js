const { Router } = require("express");
const { indexHandler } = require("../controller/indexController");

const indexRouter = Router();

indexRouter.get("/", indexHandler);

module.exports = indexRouter;
