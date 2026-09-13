require('dotenv').config() // this line imports the dotenv module and calls the config method to load environment variables from a .env file into process.env
const express = require('express'); // this line imports the express module and assigns it to the variable express
const app = express() // this line creates an instance of the express application and assigns it to the variable app

// req is the request object that contains information about the HTTP request made by the client
// res is the response object that is used to send a response back to the client
// here .get means that the application will respond to HTTP GET requests made to the specified route
app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
  res.send('Login Page')
})

// it is showing Cannot GET /login because whenever we change the code we need to restart the server to see the changes.

// here listen is a method that starts the server and listens for incoming requests on the specified port 
// here after adding dotenv file we can now use process.env.PORT instead of port
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})