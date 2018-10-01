var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var users = [];

io.on('connection', function (socket) {
    console.log('user connection');
    socket.on('setUsername', function (data) {
        console.log(data);
        if(users.indexOf(data) > -1 ){
            console.log(data);
            socket.emit('userExist', '<p class="bg-primary"> Пользователь ' +
                '<b>'  + data + '</b>' +
                ' уже существует, выбирите другое имя </p>');
        }else {
            users.push(data);
            socket.emit('userSet', {userName: data});
        }
    });

    socket.on('message', function (data) {
        io.sockets.emit('newMessage', data);
    })
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});