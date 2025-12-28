const express = require('express');
require('dotenv').config();

const PORT = 5000

const app = express()
    .use('/', (req, res) => res.send('VSCode Setup'))
    .use('/settings', require('./api'))

export default app;