const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const gallerySchema = new mongoose.Schema({
  id: Number,
  imageUrl: [String],
  address: String,
  zipcode: String,
  city: String,
  State: String,
  views: Number,
});

const Gallery = mongoose.model('Gallery', gallerySchema);
module.exports = Gallery;
