const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

let msg = null;

app.get('/', (req, res) => {
  res.contentType('image/jpeg');
  res.end(msg, 'binary');
});

io.on('connection', (socket) => {
  console.log('Connected', socket.id);

  socket.on('message', (message) => {
    console.log('Message:', message);
    msg = message;

    io.emit('image-message', msg.toString('base64'))
  });

  socket.on('disconnect', () => {
    console.log('Disconnected');
  });
});

server.listen(process.env.PORT || 5000, () => {
  console.log('listening on *:3000');
});




