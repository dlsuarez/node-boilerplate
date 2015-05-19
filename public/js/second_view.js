var socket = io.connect();
socket.on('connection message', function(data) {
	console.log(data.greeting);
});

$(function() {});