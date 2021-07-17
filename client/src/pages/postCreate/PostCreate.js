import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPostAsync } from '../../redux/reducers/postReducers';
import './PostCreate.scss';

const PostCreateForm = () => {
	const [data, setData] = useState({
		img: '',
		title: '',
		desc: '',
		content: '',
		genre: '',
		time_read: 0,
	});

	const { img, title, desc, content, genre, time_read } = data;

	const dispatch = useDispatch();

	const onChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const submitForm = (e) => {
		e.preventDefault();

		// Send data to server with async function
		dispatch(createPostAsync(data));

		// Reset fields input
		setData({
			img: '',
			title: '',
			desc: '',
			content: '',
			genre: '',
			time_read: 0,
		});
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
						type="text"
						name="title"
						placeholder="Title"
						value={title}
						onChange={onChange}
					/>
					<input
						type="text"
						name="img"
						placeholder="Image url here"
						value={img}
						onChange={onChange}
					/>
					<input
						type="text"
						name="genre"
						placeholder="Genre"
						value={genre}
						onChange={onChange}
					/>
					<input
						type="number"
						name="time_read"
						placeholder="Time read (minute)"
						value={time_read}
						onChange={onChange}
					/>
					<textarea
						type="text"
						name="desc"
						placeholder="Description"
						value={desc}
						onChange={onChange}
					/>
					<textarea
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
