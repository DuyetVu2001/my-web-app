import express from 'express';
import mongoose from 'mongoose';
import route from './routers/index.js';

const app = express();
const port = 5000;

// set up mongodb connection
const URI =
	'mongodb+srv://my-web-app:my-web-app@my-web-app.zqhw9.mongodb.net/my-data?retryWrites=true&w=majority';

mongoose
	.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to mongoDB!');

		app.listen(port, () => {
			console.log(`Server is running on port: ${port}`);
		});
	})
	.catch((error) => {
		console.error('Error: ', error);
	});

//  Route init
route(app);
