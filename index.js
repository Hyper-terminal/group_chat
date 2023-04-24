const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");

const authRoute = require("./routes/auth");
const chatsRoute = require("./routes/chats");
const contactRoute = require("./routes/contact");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRoute);
app.use("/chats", chatsRoute);
app.use("/contact", contactRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => console.log("server listening on port 3000"));
