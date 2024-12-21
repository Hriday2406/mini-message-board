const db = require("../models/db");
const asyncHandler = require("express-async-handler");

const indexHandler = asyncHandler(async (req, res) => {
  const allMessages = JSON.parse(await db.getMessages());
  allMessages.forEach((msg) => {
    msg.added = new Date(msg.added);
    msg.added = `${msg.added.getHours()}:${msg.added.getMinutes()} - ${msg.added.getDate()}/${msg.added.getMonth() + 1}/${msg.added.getFullYear()}`;
  });
  res.render("index", { messages: allMessages });
});

module.exports = { indexHandler };
