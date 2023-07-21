import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
const DB_URL =process.env.DB_URL
console.log(DB_URL)
// mongoose.connect('mongodb+srv://admin:rootrootrt@db1.ohkadxe.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect(DB_URL)
const db=mongoose.connection

db.on('error',console.error.bind(console,'error connecting to DB'))

db.once('open',()=>{
    console.log('successfully connected to the database')
})

export default db