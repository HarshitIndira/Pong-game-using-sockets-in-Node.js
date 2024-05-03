const app = require('./api');

const server = require('http').createServer(app);
const io = require('socket.io')(server);

const sockets = require('./sockets');

server.listen(3000, () => {
    console.log("Running on port 3000");
});

sockets.listen(io);
