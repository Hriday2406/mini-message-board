const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.send("new page is under construction!");
});

module.exports = newRouter;
