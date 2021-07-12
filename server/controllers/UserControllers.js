import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

let refreshTokens = [];

//@ Post -> user/sign-up -> sign up -> public
export const userSignUp = async (req, res) => {
	const { username, password } = req.body;

	// Check for existing user
	const user = await User.findOne({ username });

	if (user) {
		res.json({
			success: false,
			message: 'User already exists!',
		});
	}

	// Save user to db
	const newUser = new User({ username, password });
	await newUser.save();

	res.json({
		success: true,
		message: 'Account created successfully!',
	});
};

//@ Post -> user/sign-in -> sign in -> private
export const userSignIn = async (req, res) => {
	const { username, password } = req.body;

	// Check for existing user
	const user = await User.findOne({ username });
	if (!user) {
		return res.json({
			success: false,
			message: 'User does not exist!',
		});
	}

	if (password !== user.password) {
		res.json({
			success: false,
			message: 'Incorrect password!',
		});
	}

	// Create accessToken
	const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: '30s',
	});

	// Create refreshToken
	const refreshToken = jwt.sign(
		{ userId: user._id },
		process.env.REFRESH_TOKEN_SECRET
	);

	// Save refreshToken to refreshTokens
	refreshTokens.push(refreshToken);

	// Return to client
	res.json({
		success: true,
		message: 'User signed in successfully!',
		accessToken,
		refreshToken,
	});
};

//@ Post -> user/refresh-token -> refresh token when expire -> private
export const userRefreshToken = async (req, res) => {
	const { username, token } = req.body;

	// Check token is exists?
	if (!token) {
		res.sendStatus(401);
	}

	// Check refreshToken is valid?
	if (!refreshTokens.includes(token)) {
		res.sendStatus(403);
	}

	jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
		if (err) {
			res.sendStatus(403);
		}
	});
	// End

	// Create accessToken
	const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: '30s',
	});

	// Return to client
	res.json({
		message: 'Refreshed token successfully!',
		accessToken,
	});
};

// @ POST -> user/sign-out -> sign out -> 
export const userSignOut = async (req, res) => {
	const { token } = req.body;

	// Delete refreshToken from refreshTokens
	refreshTokens = refreshTokens.filter(
		(refreshToken) => refreshToken !== token
	);

	// Return to client
	res.sendStatus(200);
};
