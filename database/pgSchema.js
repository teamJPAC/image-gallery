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

const pool = new Pool(config);
pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack);
});

// uncomment out the below code if initializing postgres and the table needs to be built.

// const createTableText = `CREATE TABLE IF NOT EXISTS user_data (
//         id integer PRIMARY KEY,
//         image_url text,
//         address text,
//         zipcode text,
//         city text,
//         state text,
//         views int)`;

// pool.query(createTableText)
//     .then( res => console.log('Successfully Created user_data table', res))
//     .catch( err => console.log('Error with user_data table creation', err))

module.exports = pool;
