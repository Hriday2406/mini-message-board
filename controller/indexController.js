const db = require("../models/db");
const asyncHandler = require("express-async-handler");

const indexHandler = asyncHandler(async (req, res) => {
  const msgs = await db.getMessages();
  const allMessages = [...msgs];
  // allMessages.forEach((msg) => {
  //   msg.added = `${msg.added.getHours()}:${msg.added.getMinutes()} - ${msg.added.getDate()}/${msg.added.getMonth() + 1}/${msg.added.getFullYear()}`;
  // });
  res.render("index", { messages: allMessages });
  // console.log("msgs", msgs);
  // console.log("allMessages", allMessages);
  // console.log("db", await db.getMessages());
});

module.exports = { indexHandler };
