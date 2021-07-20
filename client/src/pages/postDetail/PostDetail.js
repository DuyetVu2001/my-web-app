import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './PostDetail.scss';
import { selectorPosts } from '../../redux/reducers/postReducers';

const PostDetail = () => {
	const { id } = useParams();
	const postsData = useSelector(selectorPosts);
	const post = postsData.find((post) => post._id === id);

	console.log('reload')

	const { img, title, content } = post;

	return (
		<Container>
			<div className="post-detail">
				<header className="post-detail__header">
					<div className="color"></div>
					<div className="color"></div>
					<div className="color"></div>

					<Grid container spacing={4} style={{ marginTop: 90 }}>
						{/* Image */}
						<Grid item xs={12} sm={12} md={7}>
							<div className="post-detail__img">
								<img src={img} alt="" />
							</div>
						</Grid>
						{/* End */}

						{/* Title */}
						<Grid item xs={12} sm={12} md={5}>
							<div className="post-detail__title">
								<h2>{title}</h2>
								<p className="post-detail__author">Emmet / March 11, 2000</p>

								{/* Contact */}
								<div className="post-detail__contacts">
									<span className="post-detail__icon">
										<i className="fab fa-instagram-square"></i>
									</span>
									<span className="post-detail__icon">
										<i className="fab fa-twitter-square"></i>
									</span>
									<span className="post-detail__icon">
										<i className="fab fa-facebook-square"></i>
									</span>
								</div>
								{/* End */}
							</div>
						</Grid>
						{/* End */}
					</Grid>
				</header>

				{/* Main content */}
				<Grid container style={{ marginTop: 60 }}>
					<Grid item md={2} />

					<Grid item xs={12} sm={12} md={8}>
						<article className="post-detail__article">
							<p>{content}</p>
						</article>
					</Grid>

					<Grid item md={2} />
				</Grid>
				{/* End main content*/}
			</div>
		</Container>
	);
};

export default PostDetail;
