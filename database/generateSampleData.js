const fs = require('fs');
const path = require('path');
const Chance = require('chance');
const chance = new Chance();
const { Readable } = require('stream');
const writeableStream = fs.createWriteStream(__dirname + '/mockData.csv');

//run this script in terminal to time and build the csv "time node database/generateSampleData.js"

//PSQL command line prompt to insert mock data into Postgres
//COPY user_data(id,image_url,address,zipcode,city,state,views)
//FROM '/Users/philkessel/image-gallery/database/mockData.csv' DELIMITER ',' CSV;

generateImagesArr = () => {
  let startIndex = Math.floor(Math.random() * Math.floor(1026));
  let range = Math.floor(Math.random() * (21 - 10)) + 10;
  let picIds = '';
  counter = 1;
  while ( range > 0 ) {
    picIds += startIndex + ",";
    startIndex++;
    range--;
  }
  return picIds.slice(0,-1);
}

let idCounter = 1;
const inStream = new Readable({
  read() {
    if (idCounter === 1) {
      //this.push('id,imageUrl,address,zipcode,city,State,views\n')
      console.time('one million records created in');
    }
    this.push(`${idCounter},"${generateImagesArr()}",${chance.address()},${chance.zip()},${chance.city()},${chance.state()},${0}\n`)
    if( idCounter === 10) {
      this.push(null);
    }
    if( idCounter % 1000000 === 0 ) {
      console.log(`${idCounter} records created so far`)
      console.timeEnd('one million records created in');
      console.time('one million records created in');
    }
    idCounter++;
  }
});

inStream.pipe(writeableStream);
//inStream.pipe(process.stdout);



