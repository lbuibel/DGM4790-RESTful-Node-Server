import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import { courseRouter } from './routes/course.router'

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(cors())

app.use('/course', courseRouter)

const PORT = process.env.PORT || 5000
const dbUrl = "mongodb+srv://dbUser:test1234@dark-web-kiqfi.mongodb.net/test"

mongoose.connect(dbUrl, {useUnifiedTopology: true,})
.then(result => {
    app.listen(PORT)
})
.catch(err => {
    console.log(err)
})

