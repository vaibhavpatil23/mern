const express = require("express");

const router = express.Router();

require("../server/DB/conn");
const User = require("../models/userschema");

router.get("/", (req, res) => {
  res.send("Hello world from the server router js");
});
// router.post("/register",  (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "piz filled the field property" });
//   }

//   User.findOne({ email: email })
//     .then((UserExist) => {
//       if (UserExist) {
//         return re s.status(422).json({ error: "Email already exist" });
//       }
//       const User = new User({ name, email, phone, work, password, cpassword });
//       User.save()
//         .then(() => {
//           res.status(201).json({ message: "user register successfuly" });
//         })
//         .catch((err) => res.status(500).json({ error: "failed to register" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// async code

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "piz filled the field property" });
  }
  try {
    const UserExist = await User.findOne({ email: email });
    if (UserExist) {
      return res.status(422).json({ error: "email alredy exist" });
    }
    const user = new user({ name, email, phone, work, password, cpassword });
    await user.save();
    res.status(201).json({ messege: "user register successfully" });
  } catch (err) {
    console.log(err);
  }
});

// LOGIN

router.post("/signin", async (req, res) => {
  // console.log(req.body)
  // res.json({messege:"awesome"})
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data" });
    }
    const userLogin = await User.findOne({ email: email });
    console.log(User);
  } catch (err) {
    console.log(err);
    console.log(err);
  }
});
module.exports = router;
