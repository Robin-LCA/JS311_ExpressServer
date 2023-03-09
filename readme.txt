CLASS 2.5

back end
always running
listening for requests

Request
*** verb (GET, PUT, POST, DELETE)
- URL or domain - google.com or github.com
*** route - what comes after the /      EX: /features/actions
- query (sometimes) the stuff after the ?    
      EX: https://  duckduckgo.com/?q=chickens&atb=v323-1
      &t=chromentp&ia=web
- body (sometimes)
- header ( sometimes for extra options or params) we won't 
      do much with this

Response
*** body
*** response code
- header (usually don't care about this)

When we're working on our computers, we are the server.

localhost:8080/ plus the route

CLASS 3

truthy and falsey

false values
   0
   undefined
   NaN
   false
   empty string '' ""
   null

everything else is true
******************

We're going to build our own todo app with our own api interface and our own data

we're building a todo backend and here is what we want to support:

- route that returns all the todos in our list 
   GET /todos
   return an array of all todo objects

- route that returns a single todo based on the id provided
   GET /todos/:id
      :id is the id of the todo to return if it exists
      otherwise return message "Id not found"

- route that will delete a single todo based on the id provided
   DELETE /todos/:id
      :id is the id of the todo that was deleted
      return message with the item that was deleted

- route that adds a single todo to the list
   POST /todos
      body should include an object that has a description.
      we'll make a function that generates a random id that's added
         when the new todo is created
      ex: body: 
      {"description" : "feed the dog"}

- route that updates an existing todo based on the id provided
   PUT /todos/:id
   ex: /todos/10, body= {"description": "buy groceries", "completed": true}

POST and PUT use the body

todo object should have:
- id : id of the todo item
- description : what the todo is
- completed : true or false

************
How we're going to generate a random id

Math.random()  // generates a random number betwee 0 and 1
0
0.001
0.4655748
0.69873546983643565
1 // it will NEVER return 1

0.69873546983643565 * 100000
698735.46983643565
Math.floor(698735.46983643565) = 698735


***********************

CLASS 4

1. Organizing code, files, and folders
   Machine doesn't care, easier to write less buggy code,
   easier to follow what's going on for humans (team)

   Folder structure is a design choice.
   MVC architecture is most common
   model-view-controller

   Access is the same:
      export the things you want to use   
      require where you want to use them
      in express, you can export only one thing,
         but you can export multiple things in one
         object.

2. Install nodemon
   https://www.npmjs.com/package/nodemon
   https://nodemon.io/

   npm install nodemon  
   
   //should really be a devDependency and NOT used in production
   npm install --save-dev nodemon (devDependency)




