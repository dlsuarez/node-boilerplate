var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
app.use(methodOverride());
app.set('view engine', 'ejs');

var sockets = require('./sockets');

server.listen(process.env.PORT || 5002);
console.log('Welcome to node Boilerplate');

app.route('/').get(function(req, res, next) {
	res.render(__dirname + '/public/views/first_view');
});
app.route('/second_route').post(function(req, res, next) {
	res.render(__dirname + '/public/views/second_view', req);
});

io.on('connection', function (socket) {
	sockets.init(io, socket);
});