
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; 
import multer from 'multer'
import path from 'path'
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import db from './config/mongoose.js'
import Routes from './routes/index.js'

/*     Configurations            */
    const __filename =fileURLToPath(import.meta.url)
    const __dirname =path.dirname(__filename)
    
/* firmwares*/
    const app = express()

/* Middlewares */
    app.use(express.json())
    // app.use(bodyParser.json({extended:true}))
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(cors())
    app.use('/assets',express.static(path.join(__dirname,'/public/assets')))

// file storage
    // const storage =multer.diskStorage({
    //     destination:function(req,fie,cb){
    //         cb(null,"public/assets")
    //     },
    //     filename:function(req,file,cb){
    //         cb(null,file.originalname)
    //     }
    // })
    // const upload= multer({storage})

/*  server listening at port   */ 

app.use('/',Routes)

const PORT =process.env.PORT || 8009
app.listen(PORT,(err)=>{
    if(err)
        console.log('ERROR while starting server')
    console.log(`server running at port ${PORT}`)
})