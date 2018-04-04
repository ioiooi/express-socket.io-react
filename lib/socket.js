const io = require('socket.io')();

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  setInterval(() => {
    socket.emit('randomInt', Math.round(Math.random()*100))
  }, 333);
});

module.exports = io;
