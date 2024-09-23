const express = require('express');
const dotenv = require('dotenv');
const db = require('./config.js/mysql');
const app = express();
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter');
dotenv.config();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use('/auth', authRouter);

app.listen(process.env.PORT, () => {
    console.log(`App listening on Port: ${process.env.PORT}`);
});
