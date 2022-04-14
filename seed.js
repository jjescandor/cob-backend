'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const { getMaxListeners } = require('./book');
mongoose.connect(process.env.DATABASE_URL);

const Book = require('./book');
const Reading = require('./reading');

const seedBook = async () => {
  console.log('hello');
  await Book.create({
    title: '1776',
    author: 'David McCullough',
    description:
      "1776 is a book written by David McCullough, published by Simon & Schuster on May 24, 2005. The work is a companion to McCullough's earlier biography of John Adams, and focuses on the events surrounding the start of the American Revolutionary War.",
    url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942259/book3_wdcqd0.jpg',
    genre: 'Non-Fiction',
  });
  console.log('1776');

  await Book.create({
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    description:
      'Think and Grow Rich is a book written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie.',
    url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942258/book11_zysffw.jpg',
    genre: 'Non-Fiction',
  });
  console.log('saved think and grow rich!');

  await Book.create({
    title: '50 Shades of Grey',
    author: 'E.L. James',
    description:
      'When college senior Anastasia Steele (Dakota Johnson) steps in for her sick roommate to interview prominent businessman Christian Grey (Jamie Dornan) for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strange… ',
    url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942258/book6_xwb2zd.jpg',
    genre: 'Young Adult',
  });
  console.log('saved 50 shades of grey');

  await Book.create({
    title: 'Devil In The White City',
    author: 'Erik Larson',
    description:
      'The Devil in the White City: Murder, Magic, and Madness at the Fair That Changed America is a 2003 historical non-fiction book by Erik Larson presented in a novelistic style. ',
    url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942261/book10_whhajm.jpg',
  });
  console.log('Devil in the White City');

  await Book.create({
    title: 'Twilight',
    author: 'Stephanie Meyer',
    description:
      'Twilight is a series of fantasy romance novels by Stephenie Meyer. It follows the life of Isabella "Bella" Swan, a human teenager who moves to Forks, Washington and finds her life turned upside-down when she falls in love with a vampire named Edward Cullen.',
    url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942262/book7_ky5xur.jpg',
    genre: 'Young Adult',
  });
  console.log('saved twilight');

  await Book.create({
    title: 'How to Not Die Alone',
    author: 'Logan Ury',
    description:
      'A “must-read” (The Washington Post) funny and practical guide to help you find, build, and keep the relationship of your dreams.Have you ever looked around and wondered, “Why has everyone found love except me?”',
    url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942260/book9_sl75hg.jpg',
    genre: 'Non-Fiction',
  });
  console.log('Musashi');

  await Book.create({
    title: 'Musashi',
    author: 'Eiji Yoshikawa',
    description:
      'Musashi is a Japanese epic novel written by Eiji Yoshikawa, about the life and deeds of legendary Japanese swordsman Miyamoto Musashi. The book follows Shinmen Takezō starting after the Battle of Sekigahara. It follows his life after the monk Takuan forces him to reinvent himself as Miyamoto Musashi.',
    url: 'https://res.cloudinary.com/dla4r1upe/image/upload/v1649104798/musashi_dooxxy.webp',
    genre: 'Fiction',
  });
  console.log('saved How to Not Die Alone');

  await Book.create({
    title: 'By Water Beneath The Walls',
    author: 'Benjamin H. Milligan',
    description:
      'A gripping history chronicling the fits and starts of American special operations and the ultimate rise of the Navy SEALs from unarmed frogmen to elite, go-anywhere commandos—as told by one of their own.“Deeply researched, well organized, and incredibly engaging . ',
    url: 'https://res.cloudinary.com/dla4r1upe/image/upload/v1649121419/bywater_jz4ivi.jpg',
    genre: 'Non-Fiction',
  });
  console.log('saved By Water Beneath The Walls');

  await Book.create({
    title: 'The Gulag Archipelago',
    author: 'Aleksandr Solzhenitsyn',
    description:
      'The Gulag Archipelago: An Experiment in Literary Investigation is a three-volume non-fiction text written between 1958 and 1968 by Russian writer and Soviet dissident Aleksandr Solzhenitsyn. It was first published in 1973, and translated into English and French the following year. ',
    url: 'https://res.cloudinary.com/dla4r1upe/image/upload/v1649105539/gulag_fzz69s.jpg',
    genre: 'Non-Fiction',
  });
  console.log('saved The Gulag Archipelago');

  await Book.create({
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    description: `
    Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. `,
    url: 'https://res.cloudinary.com/dla4r1upe/image/upload/v1649105789/crime_vqvrmf.jpg',
    genre: 'Fiction',
  });
  console.log('saved Crime and Punishment');

  mongoose.disconnect();
};

const seedReading = async () => {
  console.log('hello');
  await Reading.create({
    title: '1776',
    author: 'David McCullough',
    description:
      "1776 is a book written by David McCullough, published by Simon & Schuster on May 24, 2005. The work is a companion to McCullough's earlier biography of John Adams, and focuses on the events surrounding the start of the American Revolutionary War.",
    url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942259/book3_wdcqd0.jpg',
    genre: 'Non-Fiction',
    email: 'jaypesc@gmail.com'
  });
  console.log('1776');

  await Reading.create({
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    description:
      'Think and Grow Rich is a book written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie.',
    url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942258/book11_zysffw.jpg',
    genre: 'Non-Fiction',
    email: 'jaypesc@gmail.com'
  });
  console.log('1776');

  mongoose.disconnect();
};

seedBook();
seedReading();
