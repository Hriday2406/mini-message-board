const db = require("../models/db");
const asyncHandler = require("express-async-handler");

const newPostHandler = asyncHandler(async (req, res) => {
  let { username, messageText } = req.body;

  username = username.trim();
  messageText = messageText.trim();
  if (!username || username.length === 0)
    throw new Error("Username is not valid");
  if (!messageText || messageText.length === 0)
    throw new Error("Message is not valid");

  let status = await db.addNewMessage(username, messageText);
  if (status) res.redirect("/");
  else throw new Error("Error in uploading to Data Base");
});

module.exports = { newPostHandler };
