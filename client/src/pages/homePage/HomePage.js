import { Container } from '@material-ui/core';

import PostSection from './postSection/PostSection';
import Header from './header/Header';

const HomePage = () => (
	<>
		<Header />
		<Container>
			<PostSection />
		</Container>
	</>
);

export default HomePage;
