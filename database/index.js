const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://admin1:admin1password@cluster0-ytvdt.mongodb.net/gallery?retryWrites=true'
mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;
module.exports = db;
