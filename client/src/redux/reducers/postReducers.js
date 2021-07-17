import { createSlice } from '@reduxjs/toolkit';
import { API_URL, INIT_STATE } from '../../constant';
import axios from 'axios';

const postsSlice = createSlice({
	name: 'posts',
	initialState: INIT_STATE.posts,
	reducers: {
		createPost: (state, action) => {
			state.data.push(action.payload);
		},

		readPosts: (state, action) => {
			state.data = action.payload;
		},

		updatePost: (state, action) => {
			state.data.map((post) =>
				post._id !== action.payload._id ? post : action.payload
			);
		},

		deletePost: (state, action) => {
			state.data.filter((post) => post._id !== action.payload._id);
		},
	},
});

export const { createPost, readPosts, updatePost, deletePost } =
	postsSlice.actions;

export const fetchPosts = () => async (dispatch) => {
	try {
		// get data from server
		const res = await axios.get(`${API_URL}/posts`);

		// dispatch to state
		dispatch(readPosts(res.data.data));
	} catch (error) {
		console.log('errors: ', error);
	}
};

export const createPostAsync = (data) => async dispatch => {
	try {
		// Send data to server
		await axios.post(`${API_URL}/posts/create`, data);

		// dispatch
		dispatch(createPost(data));
	} catch (error) {
		console.log('errors: ', error);
	}
}

export default postsSlice.reducer;
