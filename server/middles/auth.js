import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader.split(' ')[1];

	if (!token) {
		res.sendStatus(401);
	}

	jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
		console.log(err, data);
        next();
	});
};
