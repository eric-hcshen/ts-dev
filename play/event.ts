import {EventEmitter} from 'stream';

//import {EventEmitter} from 'event'; both stream and event comes from Nodejs.EventEmitter

const eventEmitter:EventEmitter = new EventEmitter();
eventEmitter.on('Event', () => {
    console.log(1);
});
eventEmitter.on('Event', () => {
    console.log(2);
});
eventEmitter.on('Event', () => {
    console.log(3);
});

module.exports = {eventEmitter};
