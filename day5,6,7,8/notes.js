// for mongodb 
// just make a account on MongoDB Atlas (https://www.mongodb.com/cloud/atlas) and create a new cluster. Once your cluster is set up, you can create a database and collections to store your notes.   
// after setting up your MongoDB Atlas account and creating a cluster, you can follow these steps to create a database and collections for your notes:

// 1. Log in to your MongoDB Atlas account and navigate to your cluster.
// 2. Click on the "Collections" tab in the cluster dashboard.
// 3. Click on the "Create Database" button.
// 4. Enter a name for your database (e.g., "NotesDB") and a name for your first collection (e.g., "NotesCollection").
// 5. Click "Create" to create the database and collection.

// what is happening here is that you database and collection are being created in your MongoDB Atlas cluster. The database will serve as a container for your collections, and the collection will hold your individual notes as documents.

// make username, ip whitelist, and password for your MongoDB Atlas cluster. You will need these credentials to connect to your database from your application.

// we mostly use network access to connect to the MongoDB Atlas cluster. You will need to add your IP address to the IP whitelist in order to allow your application to connect to the database. You can do this by navigating to the "Network Access" tab in your cluster dashboard and adding your IP address or a range of IP addresses that you want to allow access from.


// so first i'll explain you the folder structure of this project. The folder structure is as follows:
// day5/
// ├── .env
// ├── package.json
// ├── src/
// │   ├── constants.js
// │   ├── db.js
// │   ├── index.js
// │   └── notes.js
// └── README.md    

// in controller file we are going to write the logic for our API endpoints. We will create a new file called notes.js in the src folder. This file will contain the logic for handling requests related to notes, such as creating, reading, updating, and deleting notes.
// api endpoints are the URLs that clients can use to interact with your application. In this case, we will create endpoints for creating, reading, updating, and deleting notes. These endpoints will be defined in the notes.js file and will be accessible via HTTP requests.
// in db folder we are going to write the logic for connecting to our MongoDB database. We will create a new file called db.js in the src folder. This file will contain the logic for connecting to the database and exporting the connection object so that it can be used in other parts of the application.

// in middleware folder we are going to write the logic for handling errors and validating requests. We will create a new file called middleware.js in the src folder. This file will contain the logic for handling errors and validating requests, such as checking if the request body contains all the required fields for creating a note.

// in utils folder we are going to write the logic for utility functions that can be used throughout the application. We will create a new file called utils.js in the src folder. This file will contain utility functions such as generating unique IDs for notes, formatting dates, and validating input data.

// in routes folder we are going to write the logic for defining the API routes for our application. We will create a new file called routes.js in the src folder. This file will contain the logic for defining the API routes and mapping them to the appropriate controller functions in the notes.js file.

// in constants.js file we are going to define the constants that will be used throughout the application. We will create a new file called constants.js in the src folder. This file will contain constants such as the database name, collection name, and any other values that are used in multiple places in the application.
// in index.js file we are going to write the logic for starting the server and listening for incoming requests. We will create a new file called index.js in the src folder. This file will contain the logic for starting the server and listening for incoming requests on a specified port.
// in app.js file we are going to write the logic for setting up the Express application and defining the middleware and routes. We will create a new file called app.js in the src folder. This file will contain the logic for setting up the Express application, defining middleware, and mapping routes to controller functions.
// the best practice is to keep the code organized and modular by separating different concerns into different files and folders. This makes it easier to maintain and scale the application in the future.

// dotenv package 
// mongoose package
// express package

// try catch, async await, error handling, and validation are important concepts to understand when building a Node.js application with Express and MongoDB. Here's a brief overview of each concept:
// 1. Try Catch: The try-catch statement is used to handle exceptions in JavaScript. It allows you to write code that may throw an error and catch that error to handle it gracefully. In the context of a Node.js application, you can use try-catch blocks to catch errors that may occur during database operations or other asynchronous tasks.

// 2. Async Await: Async/await is a syntax for writing asynchronous code in a more synchronous manner. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and understand. When using async/await, you can use the await keyword to wait for a promise to resolve before moving on to the next line of code.

// 3. Error Handling: Error handling is the process of catching and handling errors that may occur during the execution of your application. In a Node.js application, you can use try-catch blocks, middleware, and custom error classes to handle errors and return appropriate responses to the client. Proper error handling is important for providing a good user experience and preventing your application from crashing due to unhandled errors.

// 4. Validation: Validation is the process of checking if the input data provided by the user meets certain criteria before processing it. In a Node.js application, you can use validation libraries or write custom validation logic to ensure that the data being sent to your API endpoints is valid and meets the required format. This helps prevent invalid data from being stored in your database and ensures that your application behaves as expected.

// first index.js 
// then we also need some packages like cookie-parser, cors
// npm install cookie-parser cors

// middleware :  why where
// so middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. Middleware functions can perform the following tasks:
// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.

// if the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
// req, res, err, next


// utitils files : we made this file because we are going to use some utility functions in our application. Utility functions are functions that perform common tasks that can be reused throughout the application. By creating a separate utils file, we can keep our code organized and avoid duplicating code in multiple places. This makes it easier to maintain and update our code in the future.




// making of models
// in this project we are only making two models video and user. The video model will have the following fields:
// title: String
// description: String
// url: String
// createdAt: Date
// and many more

// The user model will have the following fields:
// name: String
// email: String
// password: String
// createdAt: Date 
// and many more

// we are going to use mongoose to create our models. Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.


// mongoose-aggregate-paginate-v2 is a plugin for Mongoose that provides pagination functionality for aggregate queries. It allows you to easily paginate the results of an aggregate query, which can be useful when dealing with large datasets. The plugin provides a simple API for specifying the page number and page size, and it automatically calculates the total number of pages and returns the appropriate subset of results for the requested page. This can help improve performance and reduce the amount of data that needs to be sent to the client at once. 

//bycrpt  is a popular library for hashing passwords in Node.js. It provides a simple and secure way to hash passwords before storing them in the database.
//bycryptjs is a JavaScript implementation of the bcrypt password hashing algorithm. It is a pure JavaScript implementation that can be used in both Node.js and browser environments. It provides the same functionality as the original bcrypt library, but it is written entirely in JavaScript and does not require any native dependencies. This makes it easier to use in environments where native dependencies may not be available or may be difficult to install.

//jwt is a popular library for implementing JSON Web Tokens (JWT) in Node.js applications. JWT is a standard for securely transmitting information between parties as a JSON object. It is commonly used for authentication and authorization in web applications. The jsonwebtoken library provides a simple API for creating, signing, and verifying JWTs in Node.js applications. It supports various signing algorithms and allows you to customize the payload and expiration of the tokens. This makes it easy to implement secure authentication and authorization mechanisms in your application.
//jwt.io is a website that provides a simple and easy-to-use interface for generating, decoding, and verifying JSON Web Tokens (JWTs). It allows you to quickly create JWTs with custom payloads and headers, and it also provides a way to decode and verify existing JWTs. This can be useful for testing and debugging JWT-based authentication and authorization mechanisms in your application. The website also provides information about the structure of JWTs and the different signing algorithms that can be used.

//pre hook is a middleware function that is executed before a certain event occurs in Mongoose. It allows you to perform certain actions or modify data before it is saved to the database. For example, you can use a pre-save hook to hash a user's password before it is saved to the database. Pre hooks are defined on the schema level and can be used for various events such as save, validate, remove, and update. They are useful for implementing custom logic and ensuring data integrity in your application.