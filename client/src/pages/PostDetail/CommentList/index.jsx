import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { API_URL } from '../../../constant';
import { selectorUser } from '../../../redux/reducers/authReducers';
import CommentItem from './CommentItem';
import './style.scss';

const CommentList = () => {
	const [newComment, setNewComment] = useState('');
	const [comments, setComments] = useState([]);

	const user = useSelector(selectorUser);
	const { id: postId } = useParams();
	const socket = useRef();

	useEffect(() => {
		socket.current = io('http://localhost:8080');

		// Render new comment from socket server
		let isMounted = true;
		socket.current.on('receive-comment', (newComment, username, avatar) => {
			isMounted &&
				setComments((state) => [
					{
						comment: newComment,
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

	useEffect(() => {
		// get all comments in current post
		(async () => {
			try {
				const res = await axios.get(API_URL + '/comments/' + postId);
				setComments(res.data.comments);
			} catch (error) {
				console.log(error);
			}
		})();

		// send postId to socket server
		socket.current.emit('join-post', postId);
	}, [postId]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newComment) return;

		setComments((state) => [
			{
				comment: newComment,
				user: {
					avatar: user.avatar,
					username: user.username,
				},
			},
			...state,
		]);

		// Send new comment to socket server
		socket.current.emit(
			'send-comment',
			newComment,
			user.username,
			user.avatar,
			postId
		);

		setNewComment('');

		// upload newComment to db
		(async () => {
			await axios.post(API_URL + '/comments/', {
				user: user._id,
				post: postId,
				comment: newComment,
			});
		})();
	};

	const handleDelete = async (id) => {
		setComments((state) => state.filter((comment) => comment._id !== id));
		await axios.delete(API_URL + '/comments/' + id);
	};

	const handleUpdate = (id, updateComment) => {
		if (!updateComment) return;

		setComments((state) =>
			state.map((item) =>
				item._id === id ? { ...item, comment: updateComment } : item
			)
		);

		// update comment to db
		(async () => {
			await axios.put(API_URL + '/comments/' + id, { comment: updateComment });
		})();
	};

	const itemProps = {
		handleDelete,
		handleUpdate,
		currentUserId: user._id,
		comments,
	};

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
					<TextareaAutosize
						placeholder="Comment here..."
						value={newComment}
						onChange={(e) => setNewComment(e.target.value)}
					/>
					<input type="submit" value="Comment" />
				</form>
			</div>

			{/* Comments section */}
			{comments.length > 0
				? comments.map((item, index) => (
						<CommentItem {...item} {...itemProps} key={index} index={index} />
				  ))
				: 'Nothing here!'}
		</div>
	);
};

export default CommentList;
