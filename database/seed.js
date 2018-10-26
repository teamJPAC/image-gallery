const faker = require('faker');
const Gallery = require('./Gallery.js');
const db = require('./index.js');

const seed = [
  {
    imgURL: "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg",
    description: "House",
    address: "8696 Weed Willows Ave, Las Vegas, NV 89178"
  },
  {
    imgURL: "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg",
    description: "House",
    address: "8696 Weed Willows Ave, Las Vegas, NV 89178"
  },
  {
    imgURL: "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg",
    description: "House",
    address: "8696 Weed Willows Ave, Las Vegas, NV 89178"
  },
  {
    imgURL: "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg",
    description: "House",
    address: "8696 Weed Willows Ave, Las Vegas, NV 89178"
  },
]

const insertDb = () => {
  Gallery.create(seed)
    .then(()=> db.disconnect())
    .catch(err => console.log('error: ', err);
};

insertDb();

module.exports = seed;

