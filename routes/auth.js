const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.status(200).send(
    `<form method="post" action="/auth/login">
        <input type="text" name="loginName"/>
        <button> login </button>
      </form>
      <script>
        document.querySelector('form').addEventListener('submit', (event) => {
          let message = document.querySelector('input[name="message"]').value;
          localStorage.setItem('message', message);
        });
      </script>`
  );
});

router.post("/login", (req, res, next) => {
  res.redirect("/chats");
});

module.exports = router;
