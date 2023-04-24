const dirName = require("../utils/path");
const path = require("path");

exports.getLogin = (req, res, next) => {
  res.status(200).sendFile(path.join(dirName, "views", "auth.html"));
};

exports.postLogin = (req, res, next) => {
  res.redirect("/chats");
};
