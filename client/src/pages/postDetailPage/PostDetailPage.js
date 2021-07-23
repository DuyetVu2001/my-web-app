import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Form from '../../components/form/Form';
import Input from '../../components/form/Input';
import { selectorPosts } from '../../redux/reducers/postReducers';
import PostDetail from '../postDetail/PostDetail';
import FormCreate from '../../components/form/FormCreate';

const PostDetailPage = () => {
	const [isDetail, setDetail] = useState(true);

	const { id } = useParams();
	const postsData = useSelector(selectorPosts);
	const post = postsData.find((post) => post._id === id);

	console.log('reload');

	const { img, title, content } = post;

	return (
		<Container>
			<Form>
				<div className="post-detail">
					<header className="post-detail__header">
						<div className="color"></div>
						<div className="color"></div>
						<div className="color"></div>

						<Grid container spacing={4} style={{ marginTop: 90 }}>
							{/* Image */}
							<Grid item xs={12} sm={12} md={7}>
								<div className="post-detail__img">
									{isDetail ? (
										<Input
											required={true}
											type="text"
											name="img"
											placeholder="Image url here"
											// margin="0"
											// value={img}
											// onChange={onChange}
										/>
									) : (
										<img src={img} alt={title} />
									)}
								</div>
							</Grid>
							{/* End */}

							{/* Title */}
							<Grid item xs={12} sm={12} md={5}>
								<div className="post-detail__title">
									{isDetail ? (
										<Input
											field="textarea"
											height="60%"
											fontSize="4.8rem"
											margin="0"
											required={true}
											type="text"
											name="title"
											placeholder="Title"
											// value={title}
											// onChange={onChange}
										/>
									) : (
										<h2>{title}</h2>
									)}
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
								{isDetail ? (
									<>
										<FormCreate />
									</>
								) : (
									<p>{content}</p>
								)}
							</article>
						</Grid>

						<Grid item md={2} />
					</Grid>
					{/* End main content*/}
				</div>
			</Form>
		</Container>
	);
};

export default PostDetailPage;
