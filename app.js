const express = require('express');
const { PORT } = require('./config.json');

const server = express();

server.listen(process.env.PORT || PORT, () => {
    console.log(`Server started on ${PORT} port`);
});