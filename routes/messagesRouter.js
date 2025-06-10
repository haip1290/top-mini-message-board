const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const messagesController = require("../controllers/messagesController");

const messages = [
  { id: uuidv4(), text: "Hi there!", user: "Amando", added: new Date() },
  { id: uuidv4(), text: "Hello world", user: "Charles", added: new Date() },
  { id: uuidv4(), text: "goodbye", user: "Charles", added: new Date() },
];

router.get("/", messagesController.index);

router.get("/new", messagesController.getCreateMessageForm);

router.post("/new", messagesController.createNewMessage);

router.get("/details", messagesController.detail);

module.exports = router;
