let express = require("express");
let router = express.Router();

let todoControllers = require('../controllers/todoControllers')

router.post("/todos", todoControllers.postTodo)
router.get("/todos", todoControllers.getAllTodos)


module.exports = router;