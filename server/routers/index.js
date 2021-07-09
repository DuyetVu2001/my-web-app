import cardRouter from './card.js';
import userRouter from './user.js';

const route = (app) => {
	app.use('/cards', cardRouter);
	app.use('/user', userRouter);
};

export default route;
