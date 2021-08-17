import moment from 'moment';

const CommentItem = (props) => {
	const {
		comment,
		createdAt,
		user: { username, avatar },
	} = props;

	return (
		<div className="comments__item">
			<img
				src={avatar || 'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'}
				alt="avatar"
				className="comments__user-avatar"
			/>
			<div className="comments__content-wrapper">
				<div className="comments__username">
					<p>
						{username}{' '}
						<span>{moment(createdAt).format('YYYY-MM-DD, h:mm:ss a')}</span>{' '}
					</p>
				</div>
				<div className="comments__content">
					<p>{comment}</p>
				</div>
			</div>
		</div>
	);
};

export default CommentItem;
