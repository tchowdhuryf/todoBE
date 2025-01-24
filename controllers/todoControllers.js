const Todo = require("../models/todoSchema.js");

// Create
async function createTodo(req, res) {
  try {
    let newTodo = new Todo(req.body);

    await newTodo.save();

    res.json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
}

// Read
async function readTodo(req, res) {
  try {
    let allTodos = await Todo.find({});

    res.json(allTodos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
}

// Update
async function updateTodo(req, res) {
  try {
    let updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
}

// Delete
async function deleteTodo(req, res) {
  try {
    await Todo.findByIdAndDelete(req.params.id);

    res.json({ msg: "Deleted Todo" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
}

module.exports = {
  createTodo,
  readTodo,
  updateTodo,
  deleteTodo,
};
