const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user.js');
const billRoute = require('./routes/bill.js');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', userRoute);
app.use('/bill', billRoute);
module.exports = app;