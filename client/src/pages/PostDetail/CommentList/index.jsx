import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../constant';
import { selectorUser } from '../../../redux/reducers/authReducers';
import CommentItem from './CommentItem';
import './style.scss';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

const CommentList = () => {
	const [comment, setComment] = useState('');
	const [comments, setComments] = useState([]);
	// get id from url
	const { id: postId } = useParams();
	const user = useSelector(selectorUser);

	// fetch comments
	useEffect(() => {
		const getComments = async () => {
			try {
				const res = await axios.post(API_URL + '/comments', {
					post_id: postId,
				});

				setComments(res.data.comments);
			} catch (error) {
				console.log(error);
			}
		};

		getComments();
	}, [postId]);

	const handleOnChange = (e) => {
		setComment(e.target.value);
	};

	// upload data when click submit button
	const upload = async () => {
		await axios.post(API_URL + '/comments/upload', {
			user: user._id,
			post: postId,
			comment,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setComments((state) => [
			{
				comment,
				user: {
					avatar: user.avatar,
					username: user.username,
				},
			},
			...state,
		]);

		setComment('');

		socket.emit('send-message', comment, user.username, user.avatar, postId);

		upload();
	};
	// end

	useEffect(() => {
		socket.emit('join-room', postId);
	}, [postId]);

	useEffect(() => {
		let isMounted = true;

		socket.on('receive-message', (comment, username, avatar) => {
			isMounted &&
				setComments((state) => [
					{
						comment,
						user: {
							username,
							avatar,
						},
					},
					...state,
				]);
		});

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="comments">
			<div className="comments__header">
				<p>{comments.length} Comments</p>
			</div>

			<div className="comments__form-wrapper">
				<img
					src={user.avatar || 'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'}
					alt="avatar"
					className="comments__user-avatar"
				/>
				<form className="comments__form" onSubmit={handleSubmit}>
					<input
						type="text"
						name="comment"
						autoComplete="off"
						placeholder="Comment here..."
						value={comment}
						onChange={handleOnChange}
					/>
					<input type="submit" value="Comment" />
				</form>
			</div>
			{comments.length > 0
				? comments.map((item, index) => <CommentItem {...item} key={index} />)
				: 'Nothing here!'}
		</div>
	);
};

export default CommentList;
