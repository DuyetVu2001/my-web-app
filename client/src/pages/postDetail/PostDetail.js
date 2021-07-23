import Grid from '@material-ui/core/Grid';
import './PostDetail.scss';

const PostDetail = ({ content }) => {
	return (
		<Grid container style={{ marginTop: 60 }}>
			<Grid item md={2} />

			<Grid item xs={12} sm={12} md={8}>
				<article className="post-detail__article">
					<p>{content}</p>
				</article>
			</Grid>

			<Grid item md={2} />
		</Grid>
	);
};

export default PostDetail;
