import React, { createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   //@ Handle form submit
	// Sign in
	const signInFormSubmit = async (signInData) => {
		try {
			// Post sign in data to server and receive res
			const res = await axios.post(
				'http://localhost:5000/user/sign-in',
				signInData
			);

			// show alert message
			alert(res.data.message);
		} catch (error) {
			console.error(error);
		}
	};

	// Sign up
	const signUpFormSubmit = async (signUpData) => {
		// Post sign up data to server and receive res
		const res = await axios.post(
			'http://localhost:5000/user/sign-up',
			signUpData
		);

		// show alert message
		alert(res.data.message);
	};
	//@ End

	return (
		<AuthContext.Provider
			value={{
				signInFormSubmit,
				signUpFormSubmit,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
