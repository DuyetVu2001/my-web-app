// import { createSlice } from '@reduxjs/toolkit';
import { INIT_STATE, ACTIONS } from '../../constant';

const { CREATE_POST, READ_POSTS, UPDATE_POST, DELETE_POST } = ACTIONS.posts;

const postReducers = (state = INIT_STATE.posts, action) => {
	const { type, payload } = action;

	switch (type) {
		case CREATE_POST: {
			return {
				...state,
				isLoading: true,
				data: [...state.data, payload.data],
			};
		}

		case READ_POSTS: {
			return {
				...state,
				isLoading: true,
				data: payload.data,
			};
		}

		case UPDATE_POST: {
			return {
				...state,
				isLoading: true,
				data: state.data.map((post) =>
					state.data._id === payload.data._id ? payload.data : post
				),
			};
		}

		case DELETE_POST: {
			return {
				...state,
				isLoading: true,
				data: state.data.filter((post) => post._id !== payload.data),
			};
		}

		default:
			return state;
	}
};

export default postReducers;
