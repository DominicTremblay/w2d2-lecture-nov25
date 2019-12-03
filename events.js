const EventEmitter = require('events');

const eventEmitter = new EventEmitter();


const postMessage = message => {
  eventEmitter.emit('message', message)
};

eventEmitter.on('login', username => {

  console.log(`${username} has logged in.`);

  postMessage(`${username} says Hi!`);

});

eventEmitter.on('message', message => {

  console.log(message);

});

const login = username => {
  eventEmitter.emit('login', username);
};

login('SpongeBob');