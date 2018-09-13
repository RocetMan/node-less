// console.log(__filename);
// console.log(__dirname);
//------------------------------
// var EventEmitter = require('events').EventEmitter;
//
// var emt = new EventEmitter();
//
// var count = 0;
// var print = function () {
//     count++;
//     console.log('Click:', count);
// };
// emt.on('click', print);
// emt.addListener('click', print);
// emt.once('click', print);
//
// emt.emit('click');
//--------------------------------------------

var EventEmitter = require('events').EventEmitter;

var emt = new EventEmitter()

emt.on('event')

