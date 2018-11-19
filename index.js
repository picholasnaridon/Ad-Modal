const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', (req, res, next) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
	console.log('Example app listening on port !');
});
