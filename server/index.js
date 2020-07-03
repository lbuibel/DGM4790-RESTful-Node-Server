import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { courseRouter } from './routes/course.router'

dotenv.config()

const app = express()

app.use(cors());

app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: false
}))

app.use(bodyParser.json());

app.use('/course', courseRouter)

const PORT = process.env.PORT || 5000
const dbUrl = `${process.env.DB_CONNECTION_STRING}`

mongoose.connect(dbUrl, {useUnifiedTopology: true,})
.then(result => {
    app.listen(PORT)
})
.catch(err => {
    console.log(err)
})



  