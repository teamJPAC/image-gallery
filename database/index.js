const mongoose = require('mongoose');
// use own mongoUri
const mongoUri = '';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
module.exports = db;
