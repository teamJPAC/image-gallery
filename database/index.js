const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/zillow-gallery';

const db = mongoose.connect(mongoUri);

module.exports = db;
