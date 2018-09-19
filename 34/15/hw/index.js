const http = require('http'),
    fs = require ('fs');

// Используется Nodemon 1.18.4
// Так же популярные варианты (supervisor, forever)

http.createServer(function (req, res) {
    if(req.url === '/stream'){
       var stream = fs.createReadStream('text.txt');
       stream.pipe(res)
    }
    if(req.url === '/file'){
        fs.readFile('text.txt', function (err, data) {
            res.write(data);
            res.end();
        })
    }

}).listen(5000,function () {
    console.log('server at http://localhost:5000');

});