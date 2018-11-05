const faker = require('faker');
const Gallery = require('./Gallery.js');
const db = require('./index.js');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

AWS.config.update({ });

AWS.config.loadFromPath(__dirname + '/config.json');

const seed = [];

let s3 = new AWS.S3({ apiVersion: '2006-03-01' });

let params = {
  Bucket: 'homedetails'
};

s3.listObjects(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let baseURL = `https://s3-us-west-1.amazonaws.com/homedetails/`;
    let imgArr = [];
    for (let i = 1; i < data.Contents.length; i++) {
      imgArr.push(baseURL + data.Contents[i].Key);
    }

    for (let i = 0; i < imgArr.length; i++) {
      let property = {};
      property.id = i
      property.imageUrl = imgArr;
      property.address = faker.address.streetAddress(),
      property.zipcode = faker.address.zipCode(),
      property.city = faker.address.city(),
      property.State = faker.address.state()
      seed.push(property);
    }
    fs.writeFile(path.join(__dirname, 'sampleData.js'), JSON.stringify(seed, null, '\t'), err => {
      if (err) {
        console.log(err);
      } else {
        console.log('sampleData created');
      }
    })
  }
})



// console.log(imgArr.length)
// const seed = Array.from({ length: 1 }, () => {
 
//   return {
//     _id: 1,
//     imageUrl: imgArr,
//     address: faker.address.streetAddress(),
//     zipcode: faker.address.zipCode(),
//     city: faker.address.city(),
//     State: faker.address.state(),
//   }
// });

// (function insertDb() {
//   Gallery.create(seed)
//     .then(()=> mongoose.connection.close())
//     .catch(err => console.log('error: ', err));
// })();

// insertDb();

// module.exports = seed;