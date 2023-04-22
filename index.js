const express = require("express");
const authRoute = require("./routes/auth");
const chatsRoute = require("./routes/chats");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/auth", authRoute);
app.use("/chats", chatsRoute);

app.use((req, res, next) => {
  res.send("<h1>page not found</h1>");
});

app.listen(3000, () => console.log("server listening on port 3000"));
