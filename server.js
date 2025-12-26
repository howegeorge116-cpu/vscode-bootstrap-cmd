const express = require('express');
require('dotenv').config();

const PORT = 5000

const protocol = req.protocol            // http or https
const host = req.get("host")              // domain + port
const domain = `${protocol}://${host}`

express()
    .use('/', (req, res) => res.send('VSCode Setup'))
    .use('/settings', require('./api/routes'))
    .listen(PORT, () => {
        console.log(`🚀 Server running on ${domain}`);
    });