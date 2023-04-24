const express = require("express");

const {
  postContact,
  getSuccess,
  getContact,
} = require("../controllers/contact");

const router = express.Router();

router.get("/", getContact);

router.post("/", postContact);

router.get("/success", getSuccess);

module.exports = router;
