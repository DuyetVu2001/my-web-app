import Post from './Post';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const PostSection = () => {
	return (
		<>
			<Container>
				<Grid container spacing={2} style={{ marginTop: 40 }}>
					<Grid item xs={12} sm={6} md={4}>
						<Post />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Post />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Post />
					</Grid>
				</Grid>
				<Grid container spacing={2} style={{ marginTop: 40 }}>
					<Grid item xs={12} sm={6} md={4}>
						<Post />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Post />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Post />
					</Grid>
				</Grid>
				<Grid container spacing={2} style={{ marginTop: 40 }}>
					<Grid item xs={12} sm={6} md={4}>
						<Post />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Post />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Post />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default PostSection;
