import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import db from './config.js/mysql';
import bodyParser from 'body-parser';
import authRouter from './routes/authRouter';

dotenv.config(); 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req: Request, res: Response, next: NextFunction) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/auth', authRouter);

app.listen(process.env.PORT, () => {
    console.log(`App listening on Port: ${process.env.PORT}`);
});
