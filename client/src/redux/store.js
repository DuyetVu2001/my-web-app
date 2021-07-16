import { configureStore } from '@reduxjs/toolkit';
import postReducers from './reducers/postReducers';
import navRightReducers from './reducers/navRightReducers';

const store = configureStore({
	reducer: {
    postReducers,
		navRight: navRightReducers,
	},
});

export default store;
