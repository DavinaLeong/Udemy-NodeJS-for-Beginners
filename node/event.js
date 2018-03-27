const EVENT_NAMES = {
    newEvent: 'newEvent'
};
const EVENTS = require('events');

let emitter = new EVENTS.EventEmitter();
emitter.on(EVENT_NAMES.newEvent, (sMessage) => {
    console.log(`Message: ${sMessage}`);
});

emitter.emit(EVENT_NAMES.newEvent, 'Hello World!');