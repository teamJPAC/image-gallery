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

//This route is incomplete. The obj to be inserted needs to have current data and fields which match the schema
app.post('/homes/:id', (req, res) => {
	id = Number(req.params.id);
	Gallery.insertOne({id: id}, (err, data) => {
		if (err) {
			console.log('Post error: ', err);
		} else {
			res.send(data);
		}
	})
})

//This route is incomplete. The obj to be inserted needs to have current data and fields which match the schema
app.patch('/homes/:id', (req, res) => {
	id = Number(req.params.id);
	Gallery.findOneAndUpdate({"id": id}, (err, data) =>{
		if (err) {
			console.log('Patch Error: ', err);
		} else {
			res.send(data);
		}
	})
})

//This route is incomplete. The obj to be inserted needs to have current data and fields which match the schema
app.delete('/homes/:id', (req, res) => {
	id = Number(req.params.id);
	Gallery.findOneAndDelete({"id": id}, (err, data) =>{
		if (err) {
			console.log('Delete Error: ', err);
		} else {
			res.send(data);
		}
	})
})

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});



