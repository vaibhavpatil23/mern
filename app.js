const dotenv = require("dotenv");
const mongoose = require("mongoose");

const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./DB/conn");
const USER = require("./models/userschema");

app.use(require("./Router/auth"));

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("Hello my middleware");
  next();
};

// app.get("/", (req, res) => {
//   res.send("Hello world from the server ");
// });

app.get("/about", middleware, (req, res) => {
  console.log("Hello my about");

  res.send("Hello about world from the server");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact from the server");
});

app.get("/signin", (req, res) => {
  res.send("Hello singin your account");
});

app.get("/signup", (req, res) => {
  res.send("Hello singup the you account ");
});
app.listen(PORT, () => {
  console.log(`server is runing is port no ${PORT}`);
});
 