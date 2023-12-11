require('dotenv').config();
require('express-async-errors');
const express = require('express')
const app = express()
const cors = require('cors')

// DB connection
const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');

//Router
const authRouter = require('./routes/auth');
const sellerRouter = require('./routes/seller');
const buyerRouter = require('./routes/buyer');

//Error handler
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


//Middleware
app.use(express.json());
app.use(cors())


app.use('/api/auth', authRouter)
app.use('/api/seller', authenticateUser, sellerRouter)
app.use('/api/buyer', authenticateUser, buyerRouter)

//Grabbing error in handler
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.port || 5000;

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