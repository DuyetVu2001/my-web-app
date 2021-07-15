import React from 'react';
import './PostCreate.scss';

const PostCreateForm = () => {
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

				<form className="post-create__form">
					<input type="text" name="title" placeholder="Title" />
					<input type="text" name="img" placeholder="Image url here" />
					<input type="text" name="genre" placeholder="Genre" />
					<input type="number" name="time_read" placeholder="Time read (minute)" />
					<textarea type="text" name="desc" placeholder="Description" />
					<textarea type="text" name="content" placeholder="Content..." />
					<input type="submit" name="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
};

export default PostCreateForm;
