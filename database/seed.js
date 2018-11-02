const faker = require('faker');
const Gallery = require('./Gallery.js');
const db = require('./index.js');
const mongoose = require('mongoose');

const randomIdGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generatePhoto = () => {
  let arr = [];
  const randomId = randomIdGenerator(1, 5)
  for (let i = 1; i <= 25; i++) {
    arr.push(`https://s3-us-west-1.amazonaws.com/homedetails/houseSample${randomId}/${i}.jpg`)
  }
  return arr;
};

const seed = Array.from({ length: 5 }, () => {
  return {
    
    imageUrl: generatePhoto(),
    address: faker.address.streetAddress(),
    zipcode: faker.address.zipCode(),
    city: faker.address.city(),
    State: faker.address.state(),
  }
});

const insertDb = () => {
  Gallery.create(seed)
    .then(()=> mongoose.connection.close())
    .catch(err => console.log('error: ', err));
};

insertDb();

module.exports = seed;
