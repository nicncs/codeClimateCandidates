const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config/Config');

const mongoose = require('mongoose');
const mongoConnStr = `mongodb+srv://${config.dbConfig.mongoUser}:${config.dbConfig.mongoPassword}@${config.dbConfig.mongoServer}/${config.dbConfig.mongoDB}`;
mongoose.connect(mongoConnStr, {useNewUrlParser: true, useFindAndModify: false});
//mongoose.connect(mongoConnStr, {useNewUrlParser: true, useFindAndModify: false});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
  console.log('DB Connected')
});

const orders = require('./api/Order');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/orders', orders);

app.listen(3000);
console.log('Start SERVER Orders App --> listen to port 3000')