const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('colors');
const dotenv = require('dotenv');
const connectDb = require('./config/db');



dotenv.config();


connectDb()

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


const PORT = process.env.PORT || 8080
const DEV_MODE = process.env.DEV_MODE

app.listen(PORT , ()=>{
    console.log(`listening on ${DEV_MODE} mode on  port ${PORT}`.bgCyan.white);
})