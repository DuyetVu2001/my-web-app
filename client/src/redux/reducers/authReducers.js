import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL, INIT_STATE, LOCAL_STORAGE_TOKEN_NAME } from '../../constant';

const authSlice = createSlice({
	name: 'auth',
	initialState: INIT_STATE.auth,
	reducers: {
		setAuth: (state, action) => {
			state.isAuthenticated = action.payload.isAuthenticated;
			state.user = action.payload.user;
		},
	},
});

// Actions
export const { setAuth } = authSlice.actions;

//@ Send and receive data log in, sign up --> authenticate user
// Sign in
export const signInFormSubmit = (signInData) => async (dispatch) => {
	try {
		// Post sign in data to server and receive res
		const res = await axios.post(`${API_URL}/user/sign-in`, signInData);

		// Save accessToken to local storage
		if (res.data.success) {
			localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, res.data.accessToken);
		}

		// show alert message
		alert(res.data.message);

		// isAuthenticated = true
		dispatch(setAuth({ isAuthenticated: true, user: res.data.user }));
	} catch (error) {
		console.error(error);
	}
};

// Sign up
export const signUpFormSubmit = (signUpData) => async () => {
	// Post sign up data to server and receive res
	const res = await axios.post(`${API_URL}/user/sign-up`, signUpData);

	// show alert message
	alert(res.data.message);
};

// Sign out
export const signOutAuth = () => (dispatch) => {
	// Delete token in local storage when user logout
	localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);

	// isAuthenticated = false
	dispatch(setAuth({ isAuthenticated: false, user: null }));
};
//@ End

export const selectorIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectorUser = (state) => state.auth.user;

export default authSlice.reducer;
