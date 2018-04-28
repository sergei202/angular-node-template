'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
app.use(bodyParser.json());

app.listen(config.port, err => {
	console.log(`Listening at http://localhost:${config.port}`);
});

console.log('Server started.');

// Example GET route
app.get('/api/time', (req,res) => {
	res.json({time:Date.now(), text:Date().toString()});
});