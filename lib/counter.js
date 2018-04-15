const EventEmitter = require('events');

class Counter extends EventEmitter {
  constructor(counter = 0) {
    super();
    this.counter = counter;

    setInterval(() => {
      this.increment();
    }, 1000);
  }

  increment() {
    this.counter += 1;
    this.emit('increment', this.counter);
  }
}

module.exports = new Counter();
