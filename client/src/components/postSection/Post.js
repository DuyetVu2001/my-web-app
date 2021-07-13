import post from '../../assets/img/post.jpg';
import './Post.scss';
import { Link } from 'react-router-dom';

const Post = () => {
   return (
			<>
				<div className="post">
					<div className="post__img">
						<Link to="/detail">
							<img src={post} alt="Phi Lai Tu Temple" />
						</Link>
					</div>
					<div className="post__content">
						<Link to="/detail">
							<h2 className="post__title">
								reduce food waste in your restaurant with these tips
							</h2>
						</Link>

						<p className="post__desc">
							Running a hospitality venue means ensuring there's enough produce
							to satisfy orders without needing to discard too much. Here are
							some tips to help you reduce food waste in your venue.
						</p>
						<p className="post__genre">
							Operations
							<span className="separate"></span>
							<span className="post__icon">
								<i class="far fa-clock"></i>
							</span>
							3 min read
						</p>
					</div>
				</div>
			</>
		);
}

export default Post
