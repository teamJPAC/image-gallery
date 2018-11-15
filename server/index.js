const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
var cors = require('cors');
const db = require('../database/index.js');
const Gallery = require('../database/Gallery.js');

const app = express();
const port = 8081;

app.use(cors());
app.use(express.static(__dirname + '/../dist/'));
app.use(bodyParser.json())

app.get('/:id', (req, res) => {
	console.log('initializing page request...');
	res.sendFile(path.join(`${__dirname}/../dist/index.html`));
});

app.get('/homes/:id', (req, res) => {
	req.params.id = Number(req.params.id);
	Gallery.find({id: req.params.id}, (err, data) => {
		if (err) {
			console.log("Error*: ", err);
		} else {
			res.status(200).send(data);
		}
	})
});

app.post('/homes/:id', (req, res) => {
	let newDoc = new Gallery ({ id: 100000000,
	  imageUrl: 'fake',
	  address: 'fake',
	  zipcode: 'fake',
	  city: 'fake',
	  State: 'CA',
	  views: 0,
	})
	newDoc.save({id: id}, (err, data) => {
		if (err) {
			console.log('Post error: ', err);
		} else {
			res.send(data);
		}
	})
})

app.patch('/homes/:id', (req, res) => {
	id = Number(req.params.id);
	let query = {id: id}
	Gallery.findOneAndUpdate(query, { $inc: {views: 1} })
		.then( data => res.send(data))
		.catch( err => console.log('Error-->', err))
})

app.delete('/homes/:id', (req, res) => {
	id = Number(req.params.id);
	Gallery.deleteOne({id: id})
		.then( data => res.send(data))
		.catch( err => console.log('Error-->', err))
	})

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});



