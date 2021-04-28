// Events are a core building block of NodeJS
// class                module
const EventEmitter = require('events');
// create instance of the class so we have the object
const customEmitter = new EventEmitter();

// on - listen for an event
// emit - emit an event

// subscribe to specific event
customEmitter.on('response', (name, id) => {
    console.log(`data received: user ${name} id ${id}`)
});
// can have as many functions as we want here listening for the event and then following some logic
customEmitter.on('response', () => {
    console.log(`different data received`)
});
// pass in same string we're listening for
customEmitter.emit('response', 'kelly', 34);
// first listen for response then emit it - order matters!

// a bunch of built-in modules rely heavily on the concept of events

const http = require('http');
// using Event Emitter API
// instead of passing in callback function like we did previously, server has the method 'on' -> listen for request event then callback function handles it
const server = http.createServer();
// emits request event
// subscribe to it -> listen for it -> respond to it
server.on('request', (req, res) => {
    res.end("Welcome")
});

server.listen(5000);