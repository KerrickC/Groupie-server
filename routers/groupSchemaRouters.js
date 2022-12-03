const express = require("express");
const {
  findAll,
  insertOne,
  deleteOne,
  updateOne,
  findOne,
} = require("../utils/dbUtils");
const Group = require("../models/groupSchema").GroupModel;

const app = express();
app.disable("x-powered-by");

app.get("/getAllGroups", async (req, res) => {
  try {
    const data = await findAll(Group);

    return res.send(data);
  } catch (e) {
    console.error(e);
  }
});

app.post("/addGroup", async (req, res) => {
  try {
    const data = await insertOne(Group, req.body);

    return res.send(data);
  } catch (e) {
    console.error(e);
  }
});

app.delete("/deleteGroup/:groupName", async (req, res) => {
  try {
    const data = await deleteOne(Group, { groupName: req.params.groupName });

    return res.send(data);
  } catch (e) {
    console.error(e);
  }
});

app.put("/addUserToGroup/:groupName", async (req, res) => {
  try {
    const groupName = req.params.groupName;

    const thisGroup = await findOne(Group, { groupName: groupName });
    const curMems = thisGroup.members;

    const email = req.body.email;

    curMems.push(email);

    const data = await updateOne(
      Group,
      { groupName: groupName },
      { members: curMems }
    );

    return res.send(data);
  } catch (e) {
    console.error(e);
  }
});

module.exports = app;
