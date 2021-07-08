import cardRouter from './card.js';
import loginRouter from './login.js';

const route = (app) => {
	app.use('/cards', cardRouter);
	app.use('/login', loginRouter);
};

export default route;
