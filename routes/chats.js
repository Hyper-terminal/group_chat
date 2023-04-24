const express = require("express");

const { postChats, getChats, getAllChats } = require("../controllers/chat");

const router = express.Router();


router.get("/", getChats);

router.post("/", postChats);

router.get("/all-chats", getAllChats)

module.exports = router;
