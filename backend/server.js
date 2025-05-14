import express from 'express';
import router from './router/router.js';
// import database connection to start on start of server
import connectToDatabase from './scripts/dbConnect.js';
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', router);
//call function to connect to database
connectToDatabase();

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));