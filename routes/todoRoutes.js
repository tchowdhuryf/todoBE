//imports
const express = require("express");
const todoCTRL = require("../controllers/todoControllers.js");
const router = express.Router();

router
.route("/")
.post(todoCTRL.createTodo)
.get(todoCTRL.readTodo);

router
.route("/:id")
.put(todoCTRL.updateTodo)
.delete(todoCTRL.deleteTodo);

module.exports = router;
