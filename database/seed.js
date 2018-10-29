const faker = require('faker');
const Gallery = require('./Gallery.js');
const db = require('./index.js');
const mongoose = require('mongoose');


const seed = Array.from({ length: 100 }, () => {
  return {
    imageUrl: faker.image.city(),
    address: faker.address.streetAddress(),
    zipcode: faker.address.zipCode(),
    city: faker.address.city(),
    State: faker.address.state(),
  }
})

const insertDb = () => {
  Gallery.create(seed)
    .then(()=> mongoose.connection.close())
    .catch(err => console.log('error: ', err));
};

insertDb();

module.exports = seed;
