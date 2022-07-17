const { io } = require('socket.io-client');

// const SERVER = 'http://localhost:3000';
const SERVER = 'https://sh-scr.herokuapp.com';

const socket = io(SERVER, {
  reconnectionDelayMax: 10000,
});

socket.on('connection', () => {
  console.log('Connect', socket.id);
});

module.exports = {
  server: socket
};
