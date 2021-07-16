import { ACTIONS } from '../constant';

const { CREATE_POST, READ_POSTS, UPDATE_POST, DELETE_POST } = ACTIONS.posts;

export const createPost = (data) => ({
	type: CREATE_POST,
	payload: { data },
});

export const readPosts = (data) => ({
	type: READ_POSTS,
	payload: { data },
});

export const updatePost = (data) => ({
	type: UPDATE_POST,
	payload: { data },
});

export const deletePost = (data) => ({
	type: DELETE_POST,
	payload: { data },
});
