const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', express.static('index.html'));

module.exports = app;