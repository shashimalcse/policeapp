var express=require('express'),
    bodyParser = require('body-parser'),
    morgan=require('morgan'),
    sequelize=require('sequelize'),
    passport=require('passport'),
    jwt=require('jsonwebtoken');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));


app.use(passport.initialize());

app.use(express.static(__dirname + '../../public'));

app.get('/', function(req, res) {
    res.send('Nice meeting you wizard, I\'m Gandalf!');
});

app.listen('8080', function() {
    console.log('Magic happens at http://localhost:8080/! We are all now doomed!');
});