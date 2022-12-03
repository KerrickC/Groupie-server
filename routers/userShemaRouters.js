const express = require("express");
const { findAll, insertOne, deleteOne, findOne } = require("../utils/dbUtils");
const User = require("../models/userSchema").UserModel;

const app = express();
app.disable("x-powered-by");

app.get("/getAllUsers", async (req, res) => {
  try {
    const data = await findAll(User);

    return res.send(data);
  } catch (e) {
    console.log(e);
  }
});

app.get("/getUserByEmail/:email", async (req, res) => {
  try {
    const data = await findOne(User, { email: req.params.email });

    return res.send(data);
  } catch (e) {
    console.log(e);
  }
});

app.post("/addUser", async (req, res) => {
  try {
    const data = await insertOne(User, req.body);

    return res.send(data);
  } catch (e) {
    console.error(e);
  }
});

app.delete("/deleteUser/:email", async (req, res) => {
  try {
    const data = await deleteOne(User, { email: req.params.email });

    return res.send(data);
  } catch (e) {
    console.error(e);
  }
});

module.exports = app;
