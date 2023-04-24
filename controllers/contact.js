const fs = require("fs");
const dirName = require("../utils/path");
const path = require("path");

exports.postContact = (req, res) => {
  const { username, emailId } = req.body;
  fs.open(path.join(dirName, "contact.txt"), "a+", (err, file) => {
    if (err) console.log(err);
    else {
      fs.writeFile(file, `${username} : ${emailId} \n`, (err) => {
        res.redirect("/contact/success");
      });
    }
  });
};

exports.getContact = (req, res) => {
  res.sendFile(path.join(dirName, "views", "contact.html"));
};

exports.getSuccess = (req, res) => {
  res.send("<h1>Form submitted successfully</h1>");
};
