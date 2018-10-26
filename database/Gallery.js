const mongoose = require('mongoose');
const db = require ('./index.js');

const gallerySchema = new mongoose.Schema({
  imgURL: String,
  description: String,
  address: String,
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;


