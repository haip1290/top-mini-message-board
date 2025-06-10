const db = require("../db/queries");

const messagesController = {
  index: async (req, res) => {
    const messages = await db.getAllMessages();
    console.log("message: ", messages);
    res.render("index", { title: "Mini Messageboard", messages: messages });
  },
  getCreateMessageForm: (req, res) => res.render("form"),
  createNewMessage: (req, res) => {
    const username = req.body.author;
    const text = req.body.message;
    db.insertMessage(username, text);
    res.redirect("/");
  },
  detail: async (req, res) => {
    const id = req.query.id;
    const messages = await db.getMessageById(id);
    console.log("found messages: ", messages);
    if (messages && messages.length > 0) {
      res.render("detail", { message: messages[0] });
    } else {
      res.status(404).send(`Messages with id: ${id} not found`);
    }
  },
};

module.exports = messagesController;
