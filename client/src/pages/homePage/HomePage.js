import { Container } from '@material-ui/core';

import PostSection from './postSection/PostSection';
import Header from './header/Header';
import Filter from './postSection/Filter';

const HomePage = () => (
	<>
		<Header />
		<Container>
			<Filter />
			<PostSection />
		</Container>
	</>
);

export default HomePage;
