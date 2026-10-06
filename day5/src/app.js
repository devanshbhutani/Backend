import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import e from "express";
const app = express();

app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
// what is meaning of above lines : The cors middleware is being used to enable Cross-Origin Resource Sharing (CORS) for the Express application. The origin option specifies the allowed origin for CORS requests, and the credentials option allows credentials (such as cookies) to be included in the requests.

app.use(express.json({limit: "16kb"})); // this line means that the express.json() middleware is being used to parse incoming JSON requests. It allows the server to understand and handle JSON data sent in the request body. This is important for APIs that expect JSON data from clients, as it enables the server to access and process the data correctly.
app.use(express.urlencoded({ extended: true , limit: "16kb" })); // this line means that the express.urlencoded() middleware is being used to parse incoming requests with URL-encoded payloads. It allows the server to understand and handle data sent in the request body as key-value pairs, which is commonly used in form submissions. The extended: true option allows for rich objects and arrays to be encoded into the URL-encoded format, providing more flexibility in handling complex data structures.
app.use(express.static("public")); // this line means that the express.static() middleware is being used to serve static files from the "public" directory. It allows the server to serve files such as HTML, CSS, JavaScript, images, and other assets directly to clients without needing to define specific routes for each file. This is useful for serving front-end assets in a web application.

app.use(cookieParser()); // used because we are going to use cookies in our application. Cookies are small pieces of data that are stored on the client-side and sent to the server with each request. They can be used for various purposes, such as session management, user authentication, and storing user preferences. The cookie-parser middleware allows us to easily access and manipulate cookies in our Express application.
export {app};