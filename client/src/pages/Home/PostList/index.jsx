import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Post from './Post';
import {
	selectorPosts,
	fetchPosts,
} from '../../../redux/reducers/postReducers';
import Filter from './Filter';

const PostSection = () => {
	const postsData = useSelector(selectorPosts);
	const dispatch = useDispatch();

	// fetch data from server
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	// filter state
	const [genres, setGenres] = useState([]);

	// Filter genre
	const clickToFilter = (e) => {
		const genreValue = e.target.innerHTML.toLowerCase();

		if (genres.includes(genreValue)) {
			// change back ground when not filter
			e.target.style.backgroundColor = '';

			// delete genre filter
			return setGenres((genres) =>
				genres.filter((genre) => genreValue !== genre)
			);
		}

		// change back ground when filter
		e.target.style.backgroundColor = '#eee';
		return setGenres((genres) => [...genres, genreValue]);
	};

	return (
		<>
			<Grid container>
				<Filter clickToFilter={clickToFilter} />
			</Grid>

			<Grid container spacing={3}>
				{postsData
					.filter((post) =>
						// Check user is click filter button
						genres && genres.length
							? genres.includes(post.genre.toLowerCase())
							: post
					)
					.map((post, index) => (
						<Grid item xs={12} sm={6} md={4} key={index}>
							<Post post={post} />
						</Grid>
					))}
			</Grid>
		</>
	);
};

export default PostSection;
