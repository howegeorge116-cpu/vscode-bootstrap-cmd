const express = require('express');
require('dotenv').config();

const PORT = 5000

express()
    // .use('/', (req, res) => res.send('VSCode Setup'))
    .use('/', express.static('public'))
    .use('/settings', require('./api/routes'))
    .listen(PORT, () => {
        console.log(`🚀 Server running `);
    });