const express = require('express');
require('dotenv').config();

const PORT = 5000

const app = express()
    // .use('/', (req, res) => res.send('VSCode Setup'))
    .use('/', express.static('public'))
    .use('/settings', require('./api/routes'))

export default app;