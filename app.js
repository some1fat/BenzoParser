var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var cParser = require('./controller/parser.js').cParser;
var cIndex = require('./controller/index.js').cIndex;

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', cIndex);
app.post('/parser', cParser);

app.listen(80, function () {
	console.log('BodyParser is running on port 80!');
});