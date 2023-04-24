const fs = require("fs");
const dirName = require("../utils/path");
const path = require("path");
const filePath = path.join(dirName, "text.txt");

exports.postChats = (req, res) => {
  const { message, username } = req.body;

  fs.open(filePath, (err) => {
    if (!err) {
      fs.appendFile(filePath, `${username}: ${message}\n`, (err) => {
        if (!err) {
          res.redirect("/chats");
        } else {
          console.log(err);
        }
      });
    } else {
      console.log(err);
    }
  });
};

exports.getChats = (req, res) => {
  res.status(200).sendFile(path.join(dirName, "views", "chat.html"));
};

exports.getAllChats = (req, res) => {
  fs.open(filePath, "a+", (err, fd) => {
    if (err) throw err;
    fs.readFile(fd, (err, data) => {
      let messages = "";
      if (err) {
        messages = "";
      } else {
        messages = data.toString();
        res.json(messages);
      }
    });
  });
};
