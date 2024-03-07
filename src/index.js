import  dotenv from 'dotenv'

import { DB_NAME } from './constants.js';

import connectDB from './db/index.js'

dotenv.config({ path: './env' });

connectDB()







/*
import mongoose from 'mongoose';

import { DB_NAME } from './constants';

import express from 'express'

const app = express()

( async () => {
    try {

       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)


       app.on("error" , (error) => {
        console.log("ERRR" , error);
        throw console.error();
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
       })

    } catch (error) {

        console.log("ERROR" , error);
        throw err

    }
} )()


*/

