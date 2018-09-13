// var  http = require('http');
//
// function foo(request, response) {
//     response.writeHead(200);
//     response.write('Hello world');
//     response.end();
// }
//
// var app = http.createServer(foo);
// app.listen(3000, function () {
//     console.log('Server at http://localhost:3000');
// });
//-------------------------------------------

var http = require('http');
http.createServer(function (req, res) {
    if(req.url === '/contact'){
        res.write('Hello Node (Contact)');
        res.end()
    }
    else {
        res.write('Hello Node (Other)');
        res.end()
    }
    res.end();
}).listen(3000,function () {
    console.log('server at http://localhost:3000');

});

//--------------------------





