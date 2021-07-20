import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postReducers from './reducers/postReducers';
import navRightReducers from './reducers/navRightReducers';

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};



const reducer = combineReducers({
	posts: postReducers,
	navRight: navRightReducers,
})

const persistedReducer = persistReducer(
	persistConfig,
	reducer
);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

// const store = configureStore({
// 	reducer: {
// 		posts: postReducers,
// 	}
// });

export const persistor = persistStore(store);

export default store;
