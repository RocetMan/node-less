const http = require('http'),
    fs = require ('fs');

// Используется Nodemon 1.18.4
// Так же популярные варианты (supervisor, forever)


var stats = fs.statSync("text.txt"),
    fileSizeInBytes = stats.size,
    fileSizeInMegabytes = fileSizeInBytes / 1000000.0;

http.createServer(function (req, res) {
    if(req.url === '/stream'){
        
        console.log(fileSizeInMegabytes);

        if (fileSizeInMegabytes > 20){
            var stream = fs.createReadStream('text.txt');
            stream.pipe(res);
        }
        else {
            fs.readFile('text.txt', function (err, data) {
                res.write(data);
                res.end();
            })
        }
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