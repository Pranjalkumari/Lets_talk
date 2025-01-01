// import express from "express";   //methode-1 and for this you have to do some changes in json file

const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const messageRoute = require('./routes/messageRoute');
const connectDB = require('./config/database');
const userRoute = require('./routes/userRoute');
const cors = require('cors');
dotenv.config({});

const app = express();
const PORT = process.env.PORT || 6000;

//middleware  :   Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser()); 
const corsOption={
  origin:'http://localhost:3000',
  credentials:true
};
app.use(cors(corsOption));
//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/messages",messageRoute);

app.listen(PORT,()=> {
 connectDB();
  console.log(`server listen at port ${PORT}`);
});