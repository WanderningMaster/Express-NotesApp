const express = require('express');
const { PORT } = require('./config.json');
const noteRouter = require('./Routes/notes.route');

const server = express();

server.use(express.json());
server.use('/api', noteRouter);

server.listen(PORT, () => {
    console.log(`Server started on ${PORT} port`);
});