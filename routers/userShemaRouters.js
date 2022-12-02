const express = require("express");
const { findAll, insertOne, deleteOne } = require("../utils/dbUtils");
const User = require("../models/userSchema").UserModel;

const app = express();

app.get("/getAllUsers", async (req, res) => {
  try {
    console.log("getting all users");
    const data = await findAll(User);
    console.log(data);

    return res.send(data);
  } catch (e) {
    console.log(e);
  }
});

app.post("/addUser", async (req, res) => {
  try {
    newUser = new User(res.body);

    const data = await insertOne(newUser);
    console.log(data);

    return res.send(data);
  } catch (e) {
    console.error(e);
  }
});

app.delete("/deleteUser", async (req, res) => {
  try {
    deletedUser = new User(res.body);

    const data = await deleteOne(newUser);
    console.log(data);

    return res.send(data);
  } catch (e) {
    console.error(e);
  }
});

module.exports = app;
