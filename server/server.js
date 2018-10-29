const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use('/dist', express.static(__dirname + '/../dist/'));

let port = 3000;

app.get('/', (req, res) => {
	res.status(200).send('hi')
});
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});

