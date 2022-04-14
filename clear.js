'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const Book = require('./book');
const Reading = require('./reading');

async function clear() {
  try {
    await Book.deleteMany({});
    await Reading.deleteMany({});
    console.log('Books deleted!');
  } catch (error) {
    console.error('something went terribly wrong when deleting: ', error);
  } finally {
    mongoose.disconnect();
  }
}

clear();
