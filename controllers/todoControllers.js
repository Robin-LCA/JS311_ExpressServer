// in the homework, you'll require the appropriate data file here
// ex: const db = require('../path-to-the-data-file')

// may need to move this out of app.js to here
// let db = [];

const postTodo = (req, res) => {
   console.log("POST /todos/")
   let newItem ={};
   newItem.id = getRandomInt();
   newItem.description = req.body.description;
   newItem.completed = false;

   // put it in the database
   db.push(newItem);

   //return the newItm on the response
   res.json(newItem)
}

// const getAllTodos = (req, res) => {

// }

// const getTodoByID = (req, res) => {

// }

// const deleteTodo = (req, res) => {

// }

// const updateTodo = (req, res) => {

// }

// not exporting them all because we just did the postTodo in class
// module.exports = {postTodo, getAllTodos, getTodoByID, deleteTodo, updateTodo}

module.exports = postTodo;