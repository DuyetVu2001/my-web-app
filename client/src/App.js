import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PostCreate from './pages/postCreate/PostCreate';
import Navigation from './components/Navigation';
import HomePage from './pages/homePage/HomePage';
import NavRight from './components/navRight/NavRight';
import Footer from './components/Footer';
import PostDetailPage from './pages/postDetailPage/PostDetailPage';

function App() {
	return (
		<Router>
			<div className="app">
				<NavRight />

				<Switch>
					<Route path="/create/:id" children={<PostCreate />} />
					<Route path="/create" children={<PostCreate />} />

					{/* Detail page */}
					<Route path="/detail/:id">
						{/* Nav */}
						<Navigation />
						<PostDetailPage />
						{/* Footer */}
						<Footer />
					</Route>
					{/* Home page */}
					<Route path="/">
						<Navigation />
						<HomePage />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
