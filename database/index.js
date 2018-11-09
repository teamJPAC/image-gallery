// const mongoose = require('mongoose');
// // const mongoUri = 'mongodb+srv://admin1:admin1password@cluster0-ytvdt.mongodb.net/galleries?retryWrites=true'
// const mongoUri = 'mongodb://localhost/gallery';

// mongoose.connect(mongoUri, { useNewUrlParser: true });
// const db = mongoose.connection;
// module.exports = db;


const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://jacli1314:passwordeeznuts1@cluster0-wrvnw.mongodb.net/galleries?retryWrites=true';

// const mongoUri = 'mongodb+srv://admin1:admin1password@cluster0-ytvdt.mongodb.net/galleries?retryWrites=true';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
module.exports = db;
