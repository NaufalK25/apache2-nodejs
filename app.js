'use strict'

const express = require('express');

const app = express();
const PORT = 8000;
const HOST = '0.0.0.0';


app.get('/', (req, res) => res.send('Muhammad Naufal Kateni\n'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
