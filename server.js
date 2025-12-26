const express = require('express');
require('dotenv').config();

const PORT = 5000

express()
    .use('/settings', require('./api/routes'))
    .listen(PORT, () => {
        console.log(`🚀 Server running on ${process.env.DOMAIN}`);
    });