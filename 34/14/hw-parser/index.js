const http = require('http'),
      fs = require('fs'),
      request = require('request'),
      url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

var answer = '';

request({
    method: 'GET',
    url: url

}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        answer = body;
    }
});




var EventEmitter = require('events').EventEmitter;
var emt = new EventEmitter();
var login = function () {
    console.log('login User: ', Date());
};
var logOut = function () {
    console.log('log Out User: ', Date());
};
emt.on('login', login);
emt.on('logOut', logOut);




fs.readFile('main.html', function (err, html) {
    if (err) {
        throw err;
    }
    var server = http.createServer(function (req, res) {
        if(req.url === '/'){
            res.write(answer);
            res.end();
            emt.emit('login');
        }
        if(req.url === '/about'){
            console.log(req);
            emt.emit('login');
        }
        if(req.url === '/main'){
            res.write(html);
            emt.emit('login');
            res.end();
        }
        if(req.url === '/stop'){
            console.log('Server Close');
            emt.emit('logOut');
            server.close();
        }
    }).listen(3000);
});






























