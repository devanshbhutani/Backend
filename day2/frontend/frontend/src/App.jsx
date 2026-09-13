import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'; 

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data);
      })
      .catch(error => {
        console.error('Error fetching jokes:', error);
      });
  }, []);

  return (
    <>
      <h1>frontend</h1>
      <p>JOKES: {jokes.length}</p>
      {/*  // this line means that we are displaying the number of jokes we have in our state. initially it will be 0 because we have not fetched any jokes from backend yet. once we fetch the jokes from backend and set the state, this line will display the number of jokes we have in our state. */}
      {
        jokes.map((joke, index) => (
          <p key={index}>{joke}</p>
        ))
      }
    </>
      
  )
}

export default App

// install axios.
// what is axios? axios is a library that helps us to make HTTP requests from our frontend to our backend. it is a promise-based library that makes it easy to send asynchronous requests and handle responses. it can be used to send GET, POST, PUT, DELETE requests to the backend and get the response back. it is similar to fetch api but it has some additional features like interceptors, request cancellation, and automatic JSON data transformation.

// after writing this code it will still give error because we have to enable cors in backend so that frontend can access the data from backend. so we will install cors in backend and enable it.
// what is cors? CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the web page. In other words, it prevents a web page from making requests to a server that is not on the same origin (protocol, domain, and port) as the web page.
// solution: tell your backend developer to whitelist your url. 
// step 1: install cors in backend using npm install cors
// step 2: import cors in backend and use it as middleware. 
// step 3: now your frontend can access the data from backend without any error.

// but their is another way to solve this problem. we can use a proxy in our frontend to avoid cors error. we can add a proxy in our package.json file in frontend and set it to the url of our backend. this way when we make a request from frontend to backend, it will be proxied through the frontend server and the browser will not block the request due to cors policy.
// go to proxy vite documentation and add the proxy in vite.config.js file.