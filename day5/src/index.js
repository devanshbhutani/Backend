// require("dotenv").config({path: "./.env"});


import dotenv from "dotenv";
import conectDB from "./db/index.js";
dotenv.config({ path: "./.env" });

// in package.json file we have defined the start script as "dev": "nodemon -r dotenv/config -- experimental-json-modules src/index.js". This means that when we run the command "npm run dev", it will start the server using nodemon and load the environment variables from the .env file. The -r dotenv/config flag tells nodemon to require the dotenv package and load the environment variables before starting the server. The --experimental-json-modules flag allows us to use JSON modules in our code, which is a new feature in Node.js that allows us to import JSON files as modules.

connectDB()




























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