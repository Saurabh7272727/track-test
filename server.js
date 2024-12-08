const app = require('./app.js');
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('send-location', (data) => {
        io.emit('receive-location', { id: socket.id, ...data });
    });

    socket.on('disconnect', () => {
        io.emit('user-disconnected', socket.id);
    })
});
server.listen(3000, () => {
    console.log('listening on port 3000' + " " + 'http://localhost:3000');
})