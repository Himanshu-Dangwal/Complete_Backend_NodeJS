const EventEmitter = require('events')

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}

//This obj object of the EventEmitter super class have the property to emit events
const obj = new Sales();

// Creating an event listener to listen the event emitted by the obj and respond accordingly.
//This functions observes the obj object carefully for the event to be triggered, 
// Hence this is also known as Observer Pattern
obj.on('newSales',()=>{
    console.log("New Sales have been completed");
})

obj.emit('newSales');