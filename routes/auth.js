const express = require("express");
const dirName = require("../utils/path");
const path = require("path");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.status(200).sendFile(path.join(dirName, 'views', 'auth.html'));
});

router.post("/login", (req, res, next) => {
  res.redirect("/chats");
});

module.exports = router;
