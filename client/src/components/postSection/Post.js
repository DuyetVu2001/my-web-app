import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Post.scss';
import { deletePostAsync } from '../../redux/reducers/postReducers';

const Post = ({ post }) => {
	const { _id, img, title, desc, time_read, genre } = post;
	const dispatch = useDispatch();

	const onClickDeleteBtn = () => {
		console.log(_id);
		dispatch(deletePostAsync(_id));
	};

	// const onClickUpdate = () => <Redirect to="/create" />;

	return (
		<>
			<div className="post">
				<div className="post__option">
					<i className="fas fa-cog" />

					<div>
						<Link to={`/create/${_id}`}>Update</Link>
						<p onClick={onClickDeleteBtn}>Delete</p>
					</div>
				</div>
				<div className="post__img">
					<Link to={`/detail/${_id}`}>
						<img src={img} alt={title} />
					</Link>
				</div>
				<div className="post__content">
					<Link to={`/detail/${_id}`}>
						<h2 className="post__title">{title}</h2>
					</Link>

					<p className="post__desc">{desc}</p>
					<p className="post__genre">
						{genre}
						<span className="separate"></span>
						<span className="post__icon">
							<i className="far fa-clock" />
						</span>
						{time_read} min read
					</p>
				</div>
			</div>
		</>
	);
};

export default Post;
