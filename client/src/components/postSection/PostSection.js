import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './Post';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { selectorPosts, fetchPosts } from '../../redux/reducers/postReducers';

const PostSection = () => {
	const postsData = useSelector(selectorPosts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<>
			<Container>
				<Grid container spacing={4}>
					{postsData.map((post, index) => (
						<Grid item xs={12} sm={6} md={4} key={index}>
							<Post post={post} />
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default PostSection;
