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

 //const property = {};
 const overwrite = () => {
  return new Promise ( (resolve, reject) => {
    resolve( {
      id: count,
      imageUrl: generateImagesArr(),
      address: chance.address(),
      zipcode: chance.zip(),
      city: chance.city(),
      State: chance.state(),
      views: 0
    } )
  })
  }

  var count = 1;

const firstCreate = async () => {

  // overwrite = async () => {
  //   property.id = count;
  //   property.imageUrl = generateImagesArr();
  //   property.address = chance.address(),
  //   property.zipcode = chance.zip(),
  //   property.city = chance.city(),
  //   property.State = chance.state(),
  //   property.views = 0;
  //   return property;
  // }

  csvStream.pipe(writeableStream);
  console.time('timer');
  // const property = {}

  while ( count <= 100000 ) {
    overwrite()
      .then( property => csvStream.write(property) )
      .then( () => console.log('count', count) )
      .then( () => count++ )
      .then( () => console.log('count', count) )
      .catch( err => console.log("ERROR", err) )
  }
    // for (let i = 0; i< 100000; i++) {
    //   property.id = i+1;
    //   property.imageUrl = generateImagesArr();
    //   property.address = chance.address(),
    //   property.zipcode = chance.zip(),
    //   property.city = chance.city(),
    //   property.State = chance.state(),
    //   property.views = 0;
    //   csvStream.write(property)
    // }
  }

firstCreate()
  .then( () => csvStream.end() )
  .then( () => console.log('finished with it!') )
  .catch( err => console.log('ERROR', err) )

  // firstCreate()
  // .then( () => console.log('Done with first function...') )
  // .then( () => csvStream.end() )
  // .then( () => console.timeEnd('timer') )
  // .catch( err => console.log('create catch -->', err) )