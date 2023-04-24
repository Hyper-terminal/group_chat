const express = require("express");
const fs = require("fs");
const dirName = require("../utils/path");
const path = require("path");

const router = express.Router();

const filePath = path.join(dirName, "text.txt");

router.get("/", (req, res) => {
  fs.open(filePath, "a+", (err, fd) => {
    if (err) throw err;
    fs.readFile(fd, (err, data) => {
      let messages = "";
      if (err) {
        messages = "";
      } else {
        messages = data.toString();
      }

      res.status(200).sendFile(path.join(dirName, "views", "chat.html"));
    });
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const message = req.body.message;
  const username = req.body.username;

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
});

module.exports = router;
