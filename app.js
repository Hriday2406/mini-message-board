const express = require("express");
const app = express();
const path = require("node:path");
require("dotenv").config();

const PORT = process.env.PORT;

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/new", newRouter);
app.use("/", indexRouter);
app.use("/404", (req, res) => {
  res.status(404).render("404");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.redirect("/404");
});

app.listen(PORT || 3000, () => {
  console.log(`Server is running on Port ${PORT || 3000}`);
});
