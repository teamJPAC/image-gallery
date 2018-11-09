const mongoose = require('mongoose');
// const mongoUri = 'mongodb://localhost/gallery';
const mongoUri = 'mongodb+srv://jacli1314:passwordeeznuts1@cluster0-wrvnw.mongodb.net/galleries'

const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
module.exports = db;
