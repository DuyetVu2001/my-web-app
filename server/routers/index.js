import cardRouter from './card.js';

const route = (app) => {
	app.use('/cards', cardRouter);
};

export default route;
