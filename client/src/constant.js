export const INIT_STATE = {
	posts: {
		isLoading: false,
		data: [],
	},

	navRight: false,
};

export const ACTIONS = {
	posts: {
		// CRUD
		CREATE_POST: 'CREATE_POST',
		READ_POSTS: 'READ_POSTS',
		UPDATE_POST: 'UPDATE_POST',
		DELETE_POST: 'DELETE_POST',
	},
};
