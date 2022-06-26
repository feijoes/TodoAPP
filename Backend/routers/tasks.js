const express = require("express");
const router = express.Router();
const {
    getAllTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo, 
} = require("../controlers/tasks")

router.route("/").get(getAllTodos).post(createTodo)
router.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo)


module.exports = router