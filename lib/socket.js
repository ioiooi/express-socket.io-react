const io = require('socket.io')();
const counter = require('./counter');

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  counter.on('increment', counter => {
    socket.emit('someEvent', counter);
  })
});

module.exports = io;
