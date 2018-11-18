const fs = require('fs');
const path = require('path');
const Chance = require('chance');
const chance = new Chance();
const { Readable } = require('stream');
const writeableStream = fs.createWriteStream(__dirname + '/mockData.csv');

//run this script in terminal to time and build the csv "time node database/practice.js"

generateImagesArr = () => {
  let startIndex = Math.floor(Math.random() * Math.floor(1026));
  let range = Math.floor(Math.random() * (21 - 10)) + 10;
  let picIds = [];
  while ( range > 0 ) {
    picIds.push(startIndex);
    startIndex++;
    range--;
  }
  return picIds;
}

let idCounter = 1;
const inStream = new Readable({
  read() {
    if (idCounter === 1) {
      this.push('id,imageUrl,address,zipcode,city,State,views\n')
      console.time('one million records created in');
    }
    this.push(`${idCounter},${generateImagesArr()},${chance.address()},${chance.zip()},${chance.city()},${chance.state()},${0}\n`)
    idCounter++;
    if( idCounter === 1000001) {
      this.push(null);
    }
    if( idCounter % 1000000 === 0 ) {
      console.log(`${idCounter} records created so far`)
      console.timeEnd('one million records created in');
      console.time('one million records created in');
    }
  }

});

inStream.pipe(writeableStream);
