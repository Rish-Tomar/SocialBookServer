
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors'; 
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

/*  server listening at port   */ 

app.use('/',Routes)

const PORT =process.env.PORT || 8005
app.listen(PORT,(err)=>{
    if(err)
        console.log('ERROR while starting server')
    console.log(`server running at port ${PORT}`)
})