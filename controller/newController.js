const db = require("../models/db");
const asyncHandler = require("express-async-handler");

const newPostHandler = asyncHandler(async (req, res) => {
  const { username, messageText } = req.body;
  await db.addNewMessage(username, messageText); // handle errors
  res.redirect("/");
});

module.exports = { newPostHandler };
