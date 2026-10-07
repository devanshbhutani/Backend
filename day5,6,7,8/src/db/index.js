import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`MongoDB connected: ${connection.connection.host}`); // this line means that if the connection to the MongoDB database is successful, it will log a message to the console indicating that the connection was successful and display the host of the connected database. This is useful for debugging and confirming that the application is able to connect to the database successfully.
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // this line means that if there is an error connecting to the database, the application will exit with a non-zero status code, indicating that an error occurred. This is a common practice in Node.js applications to ensure that the application does not continue running in an unstable state when it cannot connect to its required resources.
  }
};

export default connectDB;