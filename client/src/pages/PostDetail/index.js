import { Container, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectorPosts } from '../../redux/reducers/postReducers';
import './style.scss';
import moment from 'moment';

const PostDetailPage = () => {
	const { id } = useParams();
	const postsData = useSelector(selectorPosts);
	const post = postsData.find((post) => post._id === id);

	const { img, title, content, createdAt } = post;

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
								<img src={img} alt={title} />
							</div>
						</Grid>
						{/* End */}

						{/* Title */}
						<Grid item xs={12} sm={12} md={5}>
							<div className="post-detail__title">
								<h2>{title}</h2>
								<p className="post-detail__author">
									Emmet / {moment(createdAt).format('LLL')}
								</p>

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

export default PostDetailPage;
