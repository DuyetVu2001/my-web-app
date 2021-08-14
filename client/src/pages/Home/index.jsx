import { Container } from '@material-ui/core';

import PostList from './PostList';
import Header from './Header';

const HomePage = () => (
	<>
		<Header />
		<Container>
			<PostList />
		</Container>
	</>
);

export default HomePage;
