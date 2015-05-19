var io;
var socket;

exports.init = function(io_app, socket_app){
    io = io_app;
    socket = socket_app;

    socket.emit('connection message', { greeting: 'Hello & Recycle' });
};