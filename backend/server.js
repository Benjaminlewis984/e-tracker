// body-parser is included with express
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// connfigures enviorment variables so that there can be .env files
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// uri helps establish a connection to my cluster in mongodb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connection to the MongoDB database has been established succesfully');
})

const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');

app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`The Server is running on port: ${port}`);
});


