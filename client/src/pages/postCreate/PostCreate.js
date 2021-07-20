import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	createPostAsync,
	updatePostAsync,
} from '../../redux/reducers/postReducers';
import './PostCreate.scss';
import { selectorPosts } from '../../redux/reducers/postReducers';

const PostCreateForm = () => {
	const [post, setPost] = useState({
		img: '',
		title: '',
		desc: '',
		content: '',
		genre: '',
		time_read: 0,
	});

	const { id } = useParams();

	const postsData = useSelector(selectorPosts);

	useEffect(() => {
		if (id) {
			setPost(postsData.find((post) => post._id === id));
		}
	}, [postsData, id]);

	const { img, title, desc, content, genre, time_read } = post;

	const dispatch = useDispatch();

	const onChange = (e) => {
		setPost({
			...post,
			[e.target.name]: e.target.value,
		});
	};

	const submitForm = (e) => {
		e.preventDefault();

		// Send data to server with async function
		if (id) {
			dispatch(updatePostAsync(post));
		} else {
			dispatch(createPostAsync(post));
			// Reset fields input
			setPost({
				img: '',
				title: '',
				desc: '',
				content: '',
				genre: '',
				time_read: 0,
			});
		}

	};

	return (
		<div className="post-create">
			<div className="color"></div>
			<div className="color"></div>
			<div className="color"></div>

			<div className="box"></div>
			<div className="box"></div>
			<div className="box"></div>
			<div className="box"></div>
			<div className="box"></div>

			<div className="post-create__box">
				<h3>Create Form</h3>

				<form className="post-create__form" onSubmit={submitForm}>
					<input
						required
						type="text"
						name="title"
						placeholder="Title"
						value={title}
						onChange={onChange}
					/>
					<input
						required
						type="text"
						name="img"
						placeholder="Image url here"
						value={img}
						onChange={onChange}
					/>
					<input
						required
						type="text"
						name="genre"
						placeholder="Genre"
						value={genre}
						onChange={onChange}
					/>
					<input
						required
						type="number"
						name="time_read"
						placeholder="Time read (minute)"
						value={time_read}
						onChange={onChange}
					/>
					<textarea
						required
						type="text"
						name="desc"
						placeholder="Description"
						value={desc}
						onChange={onChange}
					/>
					<textarea
						required
						type="text"
						name="content"
						placeholder="Content..."
						value={content}
						onChange={onChange}
					/>
					<input type="submit" name="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
};

export default PostCreateForm;
