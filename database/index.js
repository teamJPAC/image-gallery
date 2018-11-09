const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://jacli1314:passwordeeznuts1@cluster0-wrvnw.mongodb.net/galleries?retryWrites=true'

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;
module.exports = db;
