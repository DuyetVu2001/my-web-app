import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';
import { deletePostAsync } from '../../../../redux/reducers/postReducers';

const Post = ({ post }) => {
	const [isSetting, setSetting] = useState(false);

	// Toggle setting when click
	const toggleSetting = () => {
		setSetting(!isSetting);
	};

	const { _id, img, title, desc, time_read, genre } = post;
	const dispatch = useDispatch();

	// Delete post
	const onClickDeleteBtn = () => {
		dispatch(deletePostAsync(_id));
	};

	return (
		<div className="post">
			{/* img */}
			<div className="post__img">
				<Link to={`/detail/${_id}`}>
					<img src={img} alt={title} />
				</Link>
			</div>

			{/* body */}
			<div className="post__content">
				<h2>
					<Link to={`/detail/${_id}`}>{title}</Link>
				</h2>

				<p>{desc}</p>
			</div>

			{/* footer */}
			<div className="post__footer">
				<div className="wrap">
					<p>{genre}</p>
					<div className="separate" />
					<p>
						<i className="far fa-clock" />
						<span>{time_read} min read</span>
					</p>
				</div>

				{/* Setting */}
				<div className="post__setting">
					<i className="fas fa-cog" onClick={toggleSetting} />

					{/* toggle menu */}
					{isSetting ? (
						<div>
							<Link to={`/update/${_id}`}>Update</Link>
							<p onClick={onClickDeleteBtn}>Delete</p>
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

export default Post;
