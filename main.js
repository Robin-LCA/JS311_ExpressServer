//check
console.log("loading main.js")

// bringing in the functions provided by the express framework
const express = require('express');

// create an application object using express
let app = express();
// define the port we'll communicate through
let PORT = 8080;

// for testing on our computers, our domain name is localhost:8080
// the route is hello

// for any request where the route is "/hello"
// send this string as the response
app.get("/hello", (req, res) => {
   res.send("hello from the hello route")


})

// write a GET route definition that will let me get by an name
// request /hello/Sasha

// request parameters
app.get("/hello/:name", (req, res) => {

   let value = req.params.name;

   // either way works
   let message = "hello" + value;
   let msg2 = `hello ${value}`

   // all 3 are valid ways to display the message
   res.send(msg2)
   //res.send(message)
   //res.send(`hello ${value}`)
   
})

// write a GET route definition that will do this:
// request url contains /bye?name=mike   --> "see ya later mike"
// request url contains /bye?name=jill   --> "see ya later jill"
// request url is just /bye               --> "see y later"

//hint is you get the query parameters using: req.query.name

app.get("/bye", (request, response) =>{
    let value = request.query.name
    if (value){
    response.send(`see you later ${value}`)
    } else {
    response.send(`see you later`)
    }
})



app.listen(PORT, () => { console.log('Application is listening on port ', PORT)})