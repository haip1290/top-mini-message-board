const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const messages = [
  { id: uuidv4(), text: "Hi there!", user: "Amando", added: new Date() },
  { id: uuidv4(), text: "Hello world", user: "Charles", added: new Date() },
  { id: uuidv4(), text: "goodbye", user: "Charles", added: new Date() },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => res.render("form"));

router.post("/new", (req, res) => {
  const user = req.body.author;
  const text = req.body.message;

  messages.push({ id: uuidv4(), text: text, user: user, added: new Date() });
  res.redirect("/");
});

router.get("/details", (req, res) => {
  const id = req.query.id;
  const message = messages.find((message) => message.id === id);

  res.render("detail", { message: message });
});

module.exports = router;
