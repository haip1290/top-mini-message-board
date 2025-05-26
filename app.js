const express = require("express");
const app = express();

const path = require("node:path");
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "ejs");

const messagesRouter = require("./routes/messagesRouter");
app.use("/", messagesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express Server Listening on port ${PORT}`);
});
