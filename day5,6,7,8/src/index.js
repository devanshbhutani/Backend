// require("dotenv").config({path: "./.env"});


import dotenv from "dotenv";
 import("./app.js")
import conectDB from "./db/index.js";
dotenv.config({ path: "./.env" });

// in package.json file we have defined the start script as "dev": "nodemon -r dotenv/config -- experimental-json-modules src/index.js". This means that when we run the command "npm run dev", it will start the server using nodemon and load the environment variables from the .env file. The -r dotenv/config flag tells nodemon to require the dotenv package and load the environment variables before starting the server. The --experimental-json-modules flag allows us to use JSON modules in our code, which is a new feature in Node.js that allows us to import JSON files as modules.

connectDB()
// so whenever we call the connectDB it also returns a promise, so we can use the .then() method to handle the resolved value of the promise. In this case, we are using the .then() method to start the server after the database connection is established successfully. If there is an error connecting to the database, it will be caught in the catch block of the connectDB function and logged to the console.
  .then(() => {
    import("./app.js").then(({ app }) => {
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// second approach
// import express from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from "./db/constants.js";


























// first approach
// import express from "express";
// const app = express();

// ((async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}` );
//     app.on("error", (err) => {
//       console.error("Error connecting to MongoDB:", err);
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// })());