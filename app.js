console.log("loading the app.js file")

// bring in express framework
let express = require("express");

//define the PORT
let PORT = 8080;
//const port = process.env.PORT || 8080;

// create application server object
let app = express();

// make sure all the data passing back and forth is in json format
// using a middleware component
app.use(express.json());

/********* Example for homework *********** */
// let my app know where the public stuff is
app.use(express.static('public'));

// require the router(s) in the todoRoutes.js
const toDos = require(./routes/router);

// use toDos in your app
app.use(toDos)

/********************* */
// Didn't test, but you may have to move this to todoControllers.js if you finish all the routes and controller functions
let db = []; // this is just for testing. We don't really do this. Not persistent.

app.get("/todos", (req, res) => {
   console.log("GET /todos")
  
   res.json(db);

})

app.get("/todos/:id", (req, res) => {
   console.log("GET /todos/:id")

   let myId = req.params.id;

   let matchingItem = db.find( (item, index) => { 
      return item.id == myId;
    })

    if (matchingItem) {
      res.json(matchingItem);
    } else {
      res.send("Invalid ID")
      //res.status(404)
    }
    
})

app.delete("/todos/:id", (req, res) => {
   console.log("DELETE /todos/:id")

   let myId = req.params.id;

   // findIndex of the item where item's id = myId and splice it

   let matchingIndex = db.findIndex( (item, index) => {
      return item.id == myId;
   })

   if(matchingIndex) {
      let deletedItem = db.splice(matchingIndex, 1);
      res.json(deletedItem)
   } else {
      res.send("No matching Id. No record deleted.")
   }

})

// app.post("/todos", (req, res) => {
//    console.log("POST /todos/")
     
//    let newItem ={};
//    newItem.id = getRandomInt();
//    newItem.description = req.body.description;
//    newItem.completed = false;

//    // put it in the database
//    db.push(newItem);

//    //return the newItm on the response
//    res.json(newItem)

// })

app.put("/todos/:id", (req, res) => {
   console.log("PUT /todos/:id")

   // get the param id from the route
   let myId = req.params.id;
   //variable to hold the new description from the body you're sending in the request
   let description = req.body.description;
   //variable to hold the new completed from the body you're sending in the request
   let completed = req.body.completed == true;

   // find the item that matches the id
   let matchingItem = db.find( (item, index) => { 
      return item.id == myId;
    })

    // if we find a matching item, update it
    if (matchingItem) {
      matchingItem.description = description;
      matchingItem.completed = completed;
      res.json(matchingItem)

    } else {
      res.send("Invalid ID. No updates were performed")
    }
   
})


// function that returns a random integer
const getRandomInt = () => {
   let randomFloat = Math.random();
   let bigRandomFloat = randomFloat * 100000;
   let randomInt = Math.floor(bigRandomFloat);

   return randomInt;
}


app.listen(PORT, () => {console.log("Application is listening on port", PORT)})