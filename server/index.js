import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './routers/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

// set up mongodb connection
const URI =
	'mongodb+srv://my-web-app:my-web-app@my-web-app.zqhw9.mongodb.net/my-data?retryWrites=true&w=majority';

mongoose
	.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
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
