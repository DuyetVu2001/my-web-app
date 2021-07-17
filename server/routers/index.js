import postRouter from './post.js';
import userRouter from './user.js';

const route = (app) => {
	app.use('/posts', postRouter);
	app.use('/user', userRouter);
};

export default route;
