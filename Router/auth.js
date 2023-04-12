const express = require("express");

const router = express.Router();

require("../DB/conn");
const User = require("../models/userschema");

router.get("/", (req, res) => {
  res.send("Hello world from the server router js");
});
router.post("/register",  (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "piz filled the field property" });
  }

  User.findOne({ email: email })
    .then((UserExist) => {
      if (UserExist) {
        return res.status(422).json({ error: "Email already exist" });
      }

      const User = new User({ name, email, phone, work, password, cpassword });

      User.save()
        .then(() => {
          res.status(201).json({ message: "user register successfuly" });
        })
        .catch((err) => res.status(500).json({ error: "failed to register" }));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
