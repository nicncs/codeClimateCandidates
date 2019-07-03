const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config/Config');



const payment = require('./api/Payment');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/payment', payment);

app.listen(4000);
console.log('Start SERVER Payments App --> listen to port 4000')