const { Router } = require("express");
const { newPostHandler } = require("../controller/newController");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("newPage");
});

newRouter.post("/", newPostHandler);

module.exports = newRouter;
