var express = require('express');
var app = express();
var courses = require('./data/course.json');
var bodyParser = require('body-parser');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get('/', function (req, res) {
    res.render('index', {title: 'API'});
});

app.get('./api/courses', function (req, res) {
    res.render('courses', {
    title: 'Api Курсы',
        courses: courses
    });

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
