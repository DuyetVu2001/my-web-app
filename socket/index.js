const io = require('socket.io')(8080, {
	cors: {
		origin: 'http://localhost:3000',
	},
});

io.on('connection', (socket) => {
	socket.on('send-message', (comment, username, avatar, postId) => {
		socket.to(postId).emit('receive-message', comment, username, avatar);
	});

	socket.on('join-room', (postId) => {
		socket.join(postId);
	});
});
