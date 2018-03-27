const EVENTS = require('events');

let emitter = new EVENTS.EventEmitter();
emitter.on('newEvent', (sMessage) => {
    console.log(`Message: ${sMessage}`);
});

emitter.emit('newEvent', 'Hello World!');