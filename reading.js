'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const readingSchema = new Schema({
    title: String,
    author: String,
    description: String,
    url: String,
    genre: String,
    email: String
});
const Reading = mongoose.model('Reading', readingSchema);

module.exports = Reading;