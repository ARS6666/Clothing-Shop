const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
  console.log('A user connected');

  socket.on('offer', (data) => {
    console.log('Offer received');
    socket.broadcast.emit('offer', data);
  });

  socket.on('answer', (data) => {
    console.log('Answer received');
    socket.broadcast.emit('answer', data);
  });

  socket.on('candidate', (data) => {
    console.log('Candidate received');
    socket.broadcast.emit('candidate', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
