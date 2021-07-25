export const INIT_STATE = {
	posts: {
		isLoading: true,
		data: [],
	},

	navRight: false,

	auth: {
		isAuthenticated: false,
		user: null,
	},
};

export const API_URL = 'http://localhost:5000';

export const LOCAL_STORAGE_TOKEN_NAME = 'my-web-app';
