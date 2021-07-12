import React, {
	createContext,
	useState,
	// useReducer,
	// useContext,
	useCallback,
} from 'react';
// import { authReducer } from '../reducers/authReducer';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
	//
	// const [authState, dispatch] = useReducer(authReducer, {
	// 	authLoading: true,
	// 	isAuthenticated: false,
	// 	user: null,
	// });

	//@ Handle toggle auth form
	// Auth state
	const [isAuth, setIsAuth] = useState(false);
	// Set state auth to false
	const setAuthFalse = useCallback(() => setIsAuth(false), []);
	// Set state auth to true
	const setAuthTrue = useCallback(() => setIsAuth(true), []);
	//@ End

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
	}
	//@ End

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setAuthFalse,
				setAuthTrue,
				signInFormSubmit,
				signUpFormSubmit
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
