import express from 'express'
import mongoose from 'mongoose'
import {PORT, MONGO_URI} from './config.js'
import { Book } from './models/book.model.js'

const app = express()

app.use(express.json());

app.get('/',(req, res) => {
  console.log(req)
  return res.status(234).send('welcome to BOOKSTORE')
})

app.post('/books', async (req, res) => {
  try {
    if (
      !req.body.title || 
      !req.body.author || 
      !req.body.publishYear) 
      {
      return res.status(400).send({message: 'wajib mengisi: title, author, publishYear'})
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear
    }
    
    const book = await Book.create(newBook)
    return res.status(210).send(book)
    
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: error.message })
  }
})

app.get('/books', async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(210).send({
      count: books.length,
      data: books
    })
  } catch (error) {
    console.log(error.message)
     res.status(500).send({ message: error.message })
  }
})

app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id);
    return res.status(210).send(book)
  } catch (error) {
    console.log(error.message)
     res.status(500).send({ message: error.message })
  }
})

app.put('/books/:id', async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;


    if (!title || !author || !publishYear) {
      return res.status(400).send({ message: 'wajib mengisi: title, author, publishYear' });
    }

    const { id } = req.params;


    const result = await Book.findByIdAndUpdate(id, { title, author, publishYear }, { new: true });


    if (!result) {
      return res.status(404).send({ message: 'buku tidak ditemukan' });
    }

 
    return res.status(200).send({ message: 'berhasil mengupdate buku', data: result });

  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

mongoose.connect(MONGO_URI).then(() => {
  console.log('terhubung ke database')
  app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`)
})
})
.catch((error) => {
  console.log(error)
}) 


