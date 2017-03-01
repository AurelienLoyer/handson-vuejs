var _ = require('underscore');
var express = require('express');
var http = require('http');
var uuid = require('node-uuid');
var cors = require('./cors');
var app = express();
var server = http.createServer(app);

var conf = require('./server.json');

var beers = require(conf.beers);
var basket = [];

var sessions = {};

var context = '/api/v1';
var authHeader = 'Auth-Token';

app.use(express.bodyParser());
app.use(cors);

app.get(context + '/beers', function (req, res) {
  res.send(beers);
});

var createHandler = function(req, res) {
  basket.push(req.body);
  beers = beers.map(beer => {
    if(beer.label.toUpperCase() === req.body.label.toUpperCase()){
      beer.stock--;
    }
    return beer;
  })
  res.send(201, req.body);
}

app.post(context + '/basket', createHandler);

app.post(context + '/basket/confirm', (req, res)=> {
  basket = [];
  res.send(200);
});

app.get(context + '/basket', function (req, res) {
  res.send(basket);
});

server.listen(conf.port);
console.log('Express server listening on port', server.address().port);
