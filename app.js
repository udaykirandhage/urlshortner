const express = require('express')
const mongoose = require('mongoose')
const {router} = require('./Routes/router')
const app = express()
require('dotenv').config();
const port = process.env.port || 3008

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("view engine",'ejs')


app.use('/',router)

const startServer = async () => {
  try {
    await mongoose.connect(process.env.mongoDb_uri, {});
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
    process.exit(1); 
  }
};

startServer();