import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const books = [
	{
		title: 'helo',
	},
	{
		title: 'hi',
	},
];

export const readLogin = (req, res) => {
	console.log(req.headers);
	res.json({ status: 'Success', data: books });
};

export const createLogin = (req, res) => {
	const data = req.body;
	const token = jwt.sign(data, process.env.TOKEN_SECRET, {
		expiresIn: '18000s',
	});
	res.json({ token });
};
