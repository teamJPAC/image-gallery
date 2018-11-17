const Gallery = require('./Gallery.js');
const db = require('./index.js');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const photos = require('./photoList.js');
const Chance = require('chance');
const chance = new Chance();

const csv = require('fast-csv');
const writeableStream = fs.createWriteStream(__dirname + '/bigMockData.csv');

const headers = [
  "id",
  "imageUrl",
  "address",
  "zipcode",
  "city",
  "State",
  "views"
];

const csvStream = csv.createWriteStream({headers: headers});

writeableStream.on("finish", function(){
  console.log("DONE!");
});

//to create 10mm records of sample data with a machine with 8g of ram, shut down chrome and as many applications as possible and run this script in your terminal in the project dir:
//node --max-old-space-size=8192 generateSampleData/practice.js


generateImagesArr = () => {
  let startIndex = Math.floor(Math.random() * Math.floor(1026));
  //let range = Math.floor(Math.random() * (21 - 10)) + 10;
  let range = Math.floor(Math.random() * (21 - 10)) + 10;
  let picIds = [];
  while ( range > 0 ) {
    picIds.push(startIndex);
    startIndex++;
    range--;
  }
  return picIds;
}

let overallCount = 1;
generateMockData = () => {
  overallCount++;
  let property = {};
  property.id = overallCount,
  property.imageUrl = generateImagesArr();
  property.address = chance.address(),
  property.zipcode = chance.zip(),
  property.city = chance.city(),
  property.State = chance.state(),
  property.views = 0;
  return property;
}

const firstCreate = async () => {
  csvStream.pipe(writeableStream);
  console.time('timer');
  let batches = 500;
  let property = {};
  let count = 1;
  while (count <= batches) {
    count ++;
    for (let i = 0; i< 10000; i++) {
      property.id = overallCount,
      property.imageUrl = generateImagesArr();
      property.address = chance.address(),
      property.zipcode = chance.zip(),
      property.city = chance.city(),
      property.State = chance.state(),
      property.views = 0;
      csvStream.write(property)
    }
  }
}

const secondCreate = async () => {
  let batches = 500;

  let count = 1;
  while (count <= batches) {
    count ++;
    for (let i = 0; i< 10000; i++) {
      csvStream.write(generateMockData())
    }
  }
}

  firstCreate()
  .then( () => console.log('Done with first function...') )
  .then( () => secondCreate() )
  .then( () => csvStream.end() )
  .then( () => console.timeEnd('timer') )
  .catch( err => console.log('create catch -->', err) )
