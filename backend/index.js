import express from 'express'
import mongoose from 'mongoose'
import {PORT, MONGO_URI} from './config.js'
import { Book } from './models/book.model.js'
import booksRoute from './routes/book.routes.js';
import cors from 'cors'

const app = express()

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);


app.use('/books', booksRoute)

app.get('/',(req, res) => {
  console.log(req)
  return res.status(234).send('welcome to BOOKSTORE')
})

mongoose.connect(MONGO_URI).then(() => {
  console.log('terhubung ke database')
  app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`)
})
})
.catch((error) => {
  console.log(error)
}) 


