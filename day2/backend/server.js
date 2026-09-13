// so today is day 2 we are learning about express js and how to create a simple server using it. we will also learn about how to connect backend with frontend and how to send data from backend to frontend. we will also learn about how to use nodemon to automatically restart the server when we make changes to the code.
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('server is ready!');
// });

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why did the math book look sad? Because it had too many problems!"
];

app.get('/api/jokes', (req, res) => {
  res.json(jokes);
}); 
// now this data we have to consume in frontend so we will create a simple react app and we will use fetch api to get the data from backend and display it in frontend. 
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 

