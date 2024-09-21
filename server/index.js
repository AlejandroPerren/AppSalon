const express = require('express')
const dotenv = require('dotenv')
const db = require('./utils/mysql')
dotenv.config();
const app = express();



app.get('/auth', (req, res)=>{
    res.send('Hola')
})

app.listen(process.env.PORT,()=>{
    console.log(`App listening in Port: ${process.env.PORT}`)
    console.log(db)
})