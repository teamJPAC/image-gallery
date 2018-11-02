const express = require('express');
const bodyParser = require('body-parser');
const Galleries = require('../database/Gallery.js');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/../dist/'));

let port = 3000;

app.get('/:something', (req, res) => {
	res.sendFile(path.join(`${__dirname}/../dist/index.html`));
});

app.get('/homes/:urlId', (req, res) => {
	console.log('req.params.urlId is ', req.params.urlId)
	Galleries.find({urlId: req.params.urlId}, (err, data) => {
		console.log('data is ', data);
		if (err) {
			console.log("Error: ", err);
		} else {
			res.status(200).send(data);
		}
	})
	// res.status(200).send('hi')
});




app.listen(port, () => {
	console.log(`listening on port ${port}`);
});



