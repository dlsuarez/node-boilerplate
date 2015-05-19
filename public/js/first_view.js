var socket = io.connect();
socket.on('connection message', function(data) {
	console.log(data.greeting);
});

$(function() {
	$('input[name="first_button"]').on('click', function() {
		$('.first_form').attr('action', '/second_route');
		$('.first_form').submit();
	});
});