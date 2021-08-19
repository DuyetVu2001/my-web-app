import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useState } from 'react';
import { format } from 'timeago.js';

const CommentItem = (props) => {
	const {
		_id,
		comment,
		createdAt,
		user: { username, avatar, _id: userId },
		index,

		handleDelete,
		handleUpdate,
		currentUserId,
		comments,
	} = props;

	const [updating, setUpdating] = useState(false);
	const [updateComment, setUpdateComment] = useState(comments[index].comment);

	return (
		<>
			{updating ? (
				<div className="comments__form-wrapper">
					<img
						src={avatar || 'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'}
						alt="avatar"
						className="comments__user-avatar"
					/>
					<form
						className="comments__form"
						onSubmit={(e) => {
							e.preventDefault();
							setUpdating(false);
							handleUpdate(_id, updateComment);
						}}
					>
						<TextareaAutosize
							type="text"
							autoComplete="off"
							placeholder="Comment here..."
							value={updateComment}
							onChange={(e) => setUpdateComment(e.target.value)}
						/>
						<div className="button" onClick={() => setUpdating(false)}>
							Close
						</div>
						<input type="submit" value="Save" />
					</form>
				</div>
			) : (
				<div className="comments__item">
					<img
						src={avatar || 'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'}
						alt="avatar"
						className="comments__user-avatar"
					/>
					<div className="comments__content-wrapper">
						<div className="comments__username">
							<p>
								{username} <span>{format(createdAt)}</span>{' '}
							</p>
							{currentUserId === userId && (
								<div className="option-icon">
									<div className="icon-item">
										<i className="fas fa-ellipsis-v" />
									</div>

									<div className="icon-wrapper">
										<div
											className="icon-item"
											onClick={() => setUpdating(true)}
										>
											<i className="fas fa-edit" />
										</div>
										<div
											className="icon-item"
											onClick={() => handleDelete(_id)}
										>
											<i className="fas fa-trash" />
										</div>
									</div>
								</div>
							)}
						</div>
						<div className="comments__content">
							<p>{comment}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CommentItem;
