// var fs = require('fs');
// var http = require('http');
//
// http.createServer(function (req, res) {
//     fs.readFile('demo.txt', function (err, data) {
//         res.write(data);
//         res.end();
//     })
// }).listen(3000, function () {
//     console.log('server http://localhost:3000');
// });

//--------------------------

// var fs = require('fs');
// var http = require('http');
//
// http.createServer(function (req, res) {
//    var stream = fs.createReadStream('demo.txt');
//    stream.pipe(res);
// }).listen(3000, function () {
//     console.log('server http://localhost:3000');
// });

//---------------------------

const { Transform } = require('stream');
const trans = new Transform({
    transform(chunk, encoding, callbeck){
        this.push(chunk.toString().toUpperCase());
        callbeck(console.log('end'));
    }
});
process.stdin.pipe(trans).pipe(process.stdout);