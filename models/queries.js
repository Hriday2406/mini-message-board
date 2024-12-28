const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addNewMessage(username, message) {
  try {
    let added = new Date();
    await pool.query(
      "INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)",
      [username, message, added],
    );
    return true;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = { getAllMessages, addNewMessage };
