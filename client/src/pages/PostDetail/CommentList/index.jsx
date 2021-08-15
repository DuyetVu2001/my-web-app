import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../constant';
import { selectorUser } from '../../../redux/reducers/authReducers';
import './style.scss';
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

const CommentList = () => {
	const { id } = useParams();
	const [comment, setComment] = useState('');
	const [comments, setComments] = useState([]);

	const user = useSelector(selectorUser);
	const { username, avatar } = user;

	const handleSubmit = (e) => {
		e.preventDefault();
		setComments((state) => [
			{
				comment,
				user: {
					avatar,
					username,
				},
			},
			...state,
		]);

		setComment('');

		const upload = async () => {
			await axios.post(API_URL + '/comments/upload', {
				user: user._id,
				post: id,
				comment,
			});
		};

		upload();
	};

	// get comments
	useEffect(() => {
		const getComments = async () => {
			try {
				const res = await axios.post(API_URL + '/comments', { post_id: id });

				setComments(res.data.comments);
			} catch (error) {
				console.log(error);
			}
		};

		getComments();
	}, [id]);

	const handleOnChange = (e) => {
		setComment(e.target.value);
	};

	return (
		<div className="comments">
			<div className="comments__header">
				<p>99 Comments</p>
			</div>

			<div className="comments__form-wrapper">
				<img
					src={avatar || 'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'}
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
			{comments.length > 0
				? comments.map((item, index) => <CommentItem {...item} key={index} />)
				: 'Khong co comment hjhj!'}
		</div>
	);
};

export default CommentList;
