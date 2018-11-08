const express = require('express');
const bodyParser = require('body-parser');
const Galleries = require('../database/Gallery.js');
const path = require('path');
const app = express();
var cors = require('cors');

const port = 8081;

app.use(cors());
app.use(express.static(__dirname + '/../dist/'));

app.get('/:id', (req, res) => {
	console.log('initializing page request...');
	res.sendFile(path.join(`${__dirname}/../dist/index.html`));
});

app.get('/homes/:id', (req, res) => {
	Galleries.find({id: req.params.id}, (err, data) => {
		if (err) {
			console.log("Error: ", err);
		} else {
			res.status(200).send(data);
		}
	})
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});



