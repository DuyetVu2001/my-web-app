import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader.split(' ')[1];

	if (!token) {
		res.sendStatus(401);
	}

	// Check token is valid?
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
		if (err) {
			res.sendStatus(403);
		}
	});

	// Next middleware
	next();
};
