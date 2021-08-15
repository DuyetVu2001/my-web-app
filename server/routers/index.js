import postRouter from './post.js';
import authRouter from './auth.js';
import commentRouter from './comment.js';

const route = (app) => {
	app.use('/posts', postRouter);
	app.use('/user', authRouter);
	app.use('/comments', commentRouter);
};

export default route;
