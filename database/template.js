const Gallery = require('./Gallery.js');
const db = require('./index.js');
const mongoose = require('mongoose');

const sampleData = []; // replace with generated sample data

const insertDb = () => {
  Gallery.create(sampleData)
    .then(()=> mongoose.connection.close())
    .catch(err => console.log('error: ', err));
};

insertDb();