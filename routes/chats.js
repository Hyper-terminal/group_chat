const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const filePath = path.join(__dirname, "..", "text.txt");
router.get("/", (req, res, next) => {
  fs.open(filePath, "a+", (err, fd) => {
    if (err) throw err;
    fs.readFile(fd, (err, data) => {
      let messages = "";
      if (err) {
        messages = "";
      } else {
        messages = data.toString();
      }

      res.status(200).send(
        `<div id="messages">${messages}</div>
          <form method="post" action="/chats">
            <input type="text" name="message"/>
            <button> send </button>
          </form><script>
        window.addEventListener("load", () => {
            const messageDiv = document.querySelector("messages");
            messageDiv.innerHTML = localStorage.getItem("message") + messageDiv.innerHTML;
        })
        </script>`
      );
    });
  });
});

router.post("/", (req, res, next) => {
  const message = req.body.message;

  fs.open(filePath, (err, data) => {
    console.log(data);
    if (!err) {
      fs.appendFile(filePath, `${message}\n`, (err) => {
        if (!err) {
          console.log(err);
        }
        res.redirect("/chats");
      });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
