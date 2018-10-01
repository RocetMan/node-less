// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
//
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });
//
// io.on('connection', function(socket){
//     console.log('a user connected');
//
//     socket.on('disconnect', function () {
//         console.log('a user disconnect');
//     })
// });
//
// http.listen(3000, function(){
//     console.log('listening on *:3000');
// });

//-----------------------2-------------------------

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
//
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });
//
// io.on('connection', function(socket){
//     console.log('a user connected');
//
//     setTimeout(function () {
//         socket.send('Send a massage after connection');
//     },2000);
//
//     socket.on('disconnect', function () {
//         console.log('a user disconnect');
//     })
// });
//
// http.listen(3000, function(){
//     console.log('listening on *:3000');
// });

//-----------------------------3------------------------------


// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
//
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });
//
// io.on('connection', function(socket){
//     console.log('a user connected');
//
//     setTimeout(function () {
//         socket.emit('myEvent', {description: 'user event from server'});
//     },2000);
//
//     socket.on('disconnect', function () {
//         console.log('a user disconnect');
//     })
// });
//
// http.listen(3000, function(){
//     console.log('listening on *:3000');
// });

//------------------------------4--------------------------------------


// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
//
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });
//
// io.on('connection', function(socket){
//     console.log('a user connected');
//
//     socket.on('clientEvent', function (data) {
//         console.log(data);
//     });
//
// });
//
// http.listen(3000, function(){
//     console.log('listening on *:3000');
// });

//-------------------------------

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var users = 0;

io.on('connection', function(socket){
   users++;
    socket.broadcast.emit('broadcast', {description: users + ' users conect '});
    socket.on('disconnect', function () {
        users--;
        socket.broadcast.emit('broadcast', {description: user + 'users disconnect'})
    })
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});