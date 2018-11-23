const { Pool } = require('pg');
var config = {
    user: '',
    database: 'test',
    password: '',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000
};

const createTableText = `CREATE TABLE IF NOT EXISTS user_data (
        id integer PRIMARY KEY,
        image_url text,
        address text,
        zipcode text,
        city text,
        state text,
        views int)`;


const pool = new Pool(config);
pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack);
});
pool.query(createTableText)
    .then( res => console.log('Pretty sure the table was created'))
    .catch( err => console.log('loopsy poopsy'));


