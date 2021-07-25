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
			return res.json({
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
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: 'Internal server error' });
	}
};

//@ Post -> /user/sign-in -> sign in -> private
export const userSignIn = async (req, res) => {
	const { username, password } = req.body;

	try {
		// Check for existing user
		const user = await User.findOne({ username });
		if (!user) {
			return res.json({
				success: false,
				message: 'Incorrect username or password!',
			});
		}

		// Check password in db
		if (password !== user.password) {
			res.json({
				success: false,
				message: 'Incorrect username or password!',
			});
		}

		// Create accessToken
		const accessToken = jwt.sign(
			{ username },
			process.env.ACCESS_TOKEN_SECRET,
			{
				expiresIn: '3000s',
			}
		);

		// Return to client
		res.json({
			success: true,
			message: 'User signed in successfully!',
			accessToken,
		});
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: 'Internal server error' });
	}
};

// //@ Get -> /user -> check user is logged in ? -> public
// export const userLogged = async (req, res) => {
// 	try {
// 		// Check for existing user
// 		const user = await User.findById(req.userId).select('-password');
// 		if (!user) {
// 			return res.json({ success: false, message: 'User not found' });
// 		}

// 		// Return to client if success
// 		res.json({ success: true, user });
// 	} catch (error) {
// 		console.log(error);
// 		res.json({ success: false, message: 'Internal server error' });
// 	}
// };
