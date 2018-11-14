const mongoose = require('mongoose');
// use own mongoUri
const mongoUri = 'mongodb://localhost/houses';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
module.exports = db;
