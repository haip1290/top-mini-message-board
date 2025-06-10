const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(username, text) {
  await pool.query(
    "INSERT INTO messages (username, text, added) VALUES ($1, $2, NOW())",
    [username, text]
  );
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [id]);
  return rows;
}

module.exports = { getAllMessages, insertMessage, getMessageById };
