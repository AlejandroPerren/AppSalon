const express = require('express');
const dotenv = require('dotenv');
const db = require('./utils/mysql');
dotenv.config();
const app = express();
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


app.use('/auth', authRouter);

app.listen(process.env.PORT, () => {
    console.log(`App listening on Port: ${process.env.PORT}`);
});
