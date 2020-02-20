import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import { courseRouter } from './routes/course.router'

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

// GET /feed/posts
app.use('/course', courseRouter)

const port = 5000
const dbUrl = "mongodb+srv://dbUser:test1234@dark-web-kiqfi.mongodb.net/test"

mongoose.connect(dbUrl, {useUnifiedTopology: true,})
.then(result => {
    app.listen(port)
})
.catch(err => {
    console.log(err)
})