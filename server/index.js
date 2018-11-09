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
	console.log('req.params.id is', req.params.id);
	console.log('typeof params.id is ', typeof req.params.id);
	Galleries.find({id: req.params.id}, (err, data) => {
		console.log('data is ', data);
		if (err) {
			console.log("*************Error*************: ", err);
		} else {
			console.log("*************ELSE_BLOCK*************: ");

			res.status(200).send(data);
		}
	})
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});



