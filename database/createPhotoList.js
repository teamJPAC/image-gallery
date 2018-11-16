const fs = require('fs');
const path = require('path');

const photos = [];
let counter = 1

while (counter <= 1046) {
  photos.push(`https://s3-us-west-1.amazonaws.com/zillgo-gallery/P${counter}.jpg`)
  counter++;
}

fs.writeFile(path.join(__dirname, 'photoList.js'), JSON.stringify(photos, null, '\t'), err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Photo List created');
  }
});