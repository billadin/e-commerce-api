require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')

// DB connection
const connectDB = require('./db/connect');

//Router
const authRouter = require('./routes/auth');


//Middleware
app.use(express.json());
app.use(cors())


app.use('/api/auth', authRouter)
const port = process.env.port || 3000;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };


  start();