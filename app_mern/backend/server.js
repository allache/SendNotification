const express = require('express');
const cors =require('cors');
const mongoose = require('mongoose');


require('dotenv').config();


const app = express();
const port = process.env.PORT || 5001;

app.use(cors()); //midelweare
app.use(express.json());// because the server resive and send json format

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const usersRouter = require('./routes/users');


app.use('/users', usersRouter);

app.listen(port, () => {  //start the server
    console.log(`Server is running on port: ${port}`);
});