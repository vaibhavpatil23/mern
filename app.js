
const dotenv = require('dotenv')
const mongoose = require("mongoose");

const express = require("express");
const app = express();
dotenv.config({path:'./config.env'})


const DB = process.env.DATABASE;
const PORT = processenv.PORT;

mongoose
  .connect(DB, {
    usenewUrlparser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection is succesfully");
  })
  .catch((err) => console.log("no conection"));

const middleware = (req, res, next) => {
  console.log("Hello my middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello world from the server");
});

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
