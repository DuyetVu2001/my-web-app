const io = require('socket.io')(8080, {
	cors: {
		origin: 'http://localhost:3000',
	},
});

io.on('connection', (socket) => {
	socket.on('send-comment', (newComment, username, avatar, postId) => {
		socket.to(postId).emit('receive-comment', newComment, username, avatar);
	});

	socket.on('join-post', (postId) => {
		socket.join(postId);
	});
});
