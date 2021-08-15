import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

dotenv.config();

//@ Post -> /user/sign-up -> sign up -> public
export const userSignUp = async (req, res) => {
	const { username, password } = req.body;

	try {
		// Check for existing user
		const user = await User.findOne({ username });

		if (user) {
			return res.status(401).json({
				success: false,
				message: 'User already exists!',
			});
		}

		// Save user to db
		const newUser = new User({ username, password });
		await newUser.save();

		res.status(201).json({
			success: true,
			message: 'Account created successfully!',
		});
	} catch (error) {
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
};

//@ Post -> /user/sign-in -> sign in -> private
export const userSignIn = async (req, res) => {
	const { username, password } = req.body;

	try {
		// Check for existing user
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(401).json({
				success: false,
				message: 'Incorrect username or password!',
			});
		}

		// Check password in db
		if (password !== user.password) {
			res.status(401).json({
				success: false,
				message: 'Incorrect username or password!',
			});
		}

		// Create accessToken
		const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);

		// Return to client
		const { password: reqPassword, security_question, ...resUser } = user._doc;
		res.status(200).json({
			success: true,
			message: 'User signed in successfully!',
			accessToken,
			user: resUser,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
};
