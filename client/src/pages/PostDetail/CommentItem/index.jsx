import { useState } from 'react';
import './style.scss';

const CommentItem = () => {
	const [comment, setComment] = useState('');

	const handleOnChange = (e) => {
		setComment(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setComment('');
	};

	return (
		<div className="comments">
			<div className="comments__header">
				<p>99 Comments</p>
			</div>

			<div className="comments__form-wrapper">
				<img
					src="https://lh3.googleusercontent.com/ogw/ADea4I77NRrzbK7xNy7sVcgEb5g__S1_Z8IeO2NEJQWr=s32-c-mo"
					alt="avatar"
					className="comments__user-avatar"
				/>
				<form className="comments__form" onSubmit={handleSubmit}>
					<input
						type="text"
						name="comment"
						placeholder="Comment here..."
						value={comment}
						onChange={handleOnChange}
					/>
					<input type="submit" value="Comment" />
				</form>
			</div>

			<div className="comments__item">
				<img
					src="https://lh3.googleusercontent.com/ogw/ADea4I77NRrzbK7xNy7sVcgEb5g__S1_Z8IeO2NEJQWr=s32-c-mo"
					alt="avatar"
					className="comments__user-avatar"
				/>
				<div className="comments__content-wrapper">
					<div className="comments__username">
						<p>DuyetVu</p>
					</div>
					<div className="comments__content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
							ratione illo saepe perspiciatis inventore quibusdam ab beatae,
							eius explicabo. Quo, asperiores officiis? Provident qui dolore,
							laboriosam quaerat quia ab nostrum.
						</p>
					</div>
				</div>
			</div>

			<div className="comments__item">
				<img
					src="https://lh3.googleusercontent.com/ogw/ADea4I77NRrzbK7xNy7sVcgEb5g__S1_Z8IeO2NEJQWr=s32-c-mo"
					alt="avatar"
					className="comments__user-avatar"
				/>
				<div className="comments__content-wrapper">
					<div className="comments__username">
						<p>DuyetVu</p>
					</div>
					<div className="comments__content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
							ratione illo saepe perspiciatis inventore quibusdam ab beatae,
							eius explicabo. Quo, asperiores officiis? Provident qui dolore,
							laboriosam quaerat quia ab nostrum.
						</p>
					</div>
				</div>
			</div>

			<div className="comments__item">
				<img
					src="https://lh3.googleusercontent.com/ogw/ADea4I77NRrzbK7xNy7sVcgEb5g__S1_Z8IeO2NEJQWr=s32-c-mo"
					alt="avatar"
					className="comments__user-avatar"
				/>
				<div className="comments__content-wrapper">
					<div className="comments__username">
						<p>DuyetVu</p>
					</div>
					<div className="comments__content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
							ratione illo saepe perspiciatis inventore quibusdam ab beatae,
							eius explicabo. Quo, asperiores officiis? Provident qui dolore,
							laboriosam quaerat quia ab nostrum.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentItem;
