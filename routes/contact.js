const express = require("express");
const dirName = require("../utils/path");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(dirName, "views", "contact.html"));
});

router.post("/", (req, res) => {
  const { username, emailId } = req.body;
  fs.open(path.join(dirName, "contact.txt"), "a+", (err, file) => {
    if (err) console.log(err);
    else {
      fs.writeFile(file, `${username} : ${emailId} \n`, (err) => {
        res.redirect("/contact/success");
      });
    }
  });
});

router.get("/success", (req, res) => {
  res.send("<h1>Form submitted successfully</h1>");
});

module.exports = router;
