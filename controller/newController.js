const db = require("../models/db");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const newPostHandler = [
  [
    body("username")
      .trim()
      .isLength({ max: 20 })
      .withMessage("Username should be less than 20 characters."),
    body("messageText")
      .trim()
      .isLength({ max: 200 })
      .withMessage("Message should not be more than 200 words."),
  ],
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).render("newPage", { errors: errors.array() });

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
  }),
];

module.exports = { newPostHandler };
