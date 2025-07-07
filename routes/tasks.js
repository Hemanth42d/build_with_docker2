const express = require("express");
const Task = require("../models/task");
const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.render("index", { tasks });
});

router.post("/tasks", async (req, res) => {
  await Task.create({ title: req.body.title });
  res.redirect("/");
});

router.post("/tasks/:id/toggle", async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
});

router.post("/tasks/:id/delete", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
