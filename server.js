'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Book = require('./book.js');
const Reading = require('./reading.js');
const mongoose = require('mongoose');
const verifyUser = require('./auth.js');

const app = express();
app.use(cors());

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

const PORT = process.env.PORT || 3002;

app.use(verifyUser);
app.use(express.json());
app.get('/user', handleGetUser);

//Books Schema

app.get('/books', async (request, response) => {
  const books = await Book.find();

  response.send(books);
});

app.delete('/books/:id', async (request, response, next) => {
  try {
    await Book.findByIdAndDelete(request.params.id);
    response.status(204).send('Book was successfully deleted.');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.post('/books', async (request, response, next) => {
  try {
    const newBook = await Book.create(request.body);
    response.status(204).send('Book was successfully created.');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.put('/books/:id', async (request, response, next) => {
  try {
    const updateReads = await Book.findByIdAndUpdate(request.params.id, request.body, { new: true });
    response.status(200).send(updateReads);
  } catch (error) {
    console.error(error);
    next(error);
  }
})


//Reading Schema

app.get('/reading', async (req, res) => {
  try{
  const reads = await Reading.find({email:req.user.email});
  res.send(reads);
  }catch(error){
    console.error(error);
    res.status(400).send('Could not find books');
  }
});

app.delete('/reading/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const book = await Reading.findOne({_id:id, email:req.user.email});
    console.log(book);
    if(book) {
      await Reading.findByIdAndDelete(id);
      res.status(204).send("book deleted");
    }else {
      res.status(400).send('unable to delete book');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.use(express.json());

app.post('/reading', async (request, response, next) => {
  console.log(request.body);
  try {
    const newReading = await Reading.create({...request.body, email:request.user.email});
    response.status(204).send('Book was successfully created.');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.get('*', (request, response) => {
  response.send('Page not found');
});

//Verify the user

function handleGetUser(req, res){
  console.log("Getting the user", req.user);
  res.send(req.user);
};

app.listen(PORT, () => console.log(`listening on ${PORT}`));