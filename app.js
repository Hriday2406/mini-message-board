const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/new", newRouter);
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
