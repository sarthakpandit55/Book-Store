import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import bookRoute from './routes/bookRoute.js';
import userRoute from './routes/userRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


const PORT = process.env.Port || 4001;
const URL = process.env.MONGODB_URL;

// connetct to mongodb

try {
        mongoose.connect(URL,{
                useNewUrlParser : true,
                useUnifiedTopology : true
        })
        console.log("connected to mongodb")
} catch (error) {
        console.log("error ", error)
}


// routes

app.use("/book", bookRoute);
app.use('/user', userRoute);

app.listen(PORT,()=> console.log(`App is running on ${PORT}`))