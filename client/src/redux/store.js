import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducers from './reducers/authReducers';
import navRightReducers from './reducers/navRightReducers';
import postReducers from './reducers/postReducers';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

const reducer = combineReducers({
	posts: postReducers,
	navRight: navRightReducers,
	auth: authReducers,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export default store;
