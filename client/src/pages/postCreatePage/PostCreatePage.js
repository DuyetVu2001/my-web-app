import { Container, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Input from '../../components/Input';
import {
	createPostAsync,
	selectorPosts,
	updatePostAsync,
} from '../../redux/reducers/postReducers';

const PostCreatePage = () => {
	const [post, setPost] = useState({
		img: '',
		title: '',
		desc: '',
		content: '',
		genre: '',
		time_read: 0,
	});

	const dispatch = useDispatch();
	const { id } = useParams();
	const postsData = useSelector(selectorPosts);

	useEffect(() => {
		if (id) {
			setPost(postsData.find((post) => post._id === id));
		}
	}, [postsData, id]);

	const { img, title, desc, content, genre, time_read } = post;

	const onChange = (e) => {
		setPost({
			...post,
			[e.target.name]: e.target.value,
		});
	};

	const submitForm = (e) => {
		e.preventDefault();

		// Send data to server with async function
		if (id) {
			dispatch(updatePostAsync(post));

			alert('Post updated successfully!!')
		} else {
			dispatch(createPostAsync(post));
			// Reset fields input
			setPost({
				img: '',
				title: '',
				desc: '',
				content: '',
				genre: '',
				time_read: 0,
			});
		}
	};

	return (
		<Container>
			<form onSubmit={submitForm}>
				<div className="post-detail">
					<header className="post-detail__header">
						<div className="color"></div>
						<div className="color"></div>
						<div className="color"></div>

						<Grid container spacing={4} style={{ marginTop: 90 }}>
							{/* Image */}
							<Grid item xs={12} sm={12} md={7}>
								<div className="post-detail__img">
									<Input
										required={true}
										type="text"
										name="img"
										placeholder="Image url here"
										value={img}
										onChange={onChange}
									/>
								</div>
							</Grid>
							{/* End */}

							{/* Title */}
							<Grid item xs={12} sm={12} md={5}>
								<div className="post-detail__title">
									<Input
										field="textarea"
										height="60%"
										fontSize="4.8rem"
										margin="0"
										required={true}
										type="text"
										name="title"
										placeholder="Title"
										value={title}
										onChange={onChange}
									/>
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
								<Input
									field="textarea"
									required={true}
									type="text"
									name="desc"
									height="16rem"
									placeholder="Description"
									value={desc}
									onChange={onChange}
								/>
								<Input
									required={true}
									type="text"
									name="genre"
									placeholder="Genre"
									value={genre}
									onChange={onChange}
								/>
								<Input
									required={true}
									type="number"
									name="time_read"
									placeholder="Time read (minute)"
									value={time_read}
									onChange={onChange}
								/>

								<Input
									field="textarea"
									required={true}
									height="100vh"
									type="text"
									name="content"
									placeholder="Content..."
									value={content}
									onChange={onChange}
								/>
								<Input
									type="submit"
									name="submit"
									value="Submit"
									borderRadius="1.6rem"
									width="10rem"
									textAlign="center"
									padding="1.2rem 2.4rem"
									color="#003d5b"
									fontWeight="700"
								/>
							</article>
						</Grid>

						<Grid item md={2} />
					</Grid>
					{/* End main content*/}
				</div>
			</form>
		</Container>
	);
};

export default PostCreatePage;
