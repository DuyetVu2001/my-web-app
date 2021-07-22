import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Post from './Post';
import {
	selectorPosts,
	fetchPosts,
} from '../../../redux/reducers/postReducers';

const PostSection = () => {
	const postsData = useSelector(selectorPosts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<Grid container spacing={3}>
			{postsData.map((post, index) => (
				<Grid item xs={12} sm={6} md={4} key={index}>
					<Post post={post} />
				</Grid>
			))}
		</Grid>
	);
};

export default PostSection;
