import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PostDetail from './pages/postDetail/PostDetail';
import PostCreate from './pages/postCreate/PostCreate';
import Navigation from './components/Navigation';
import HomePage from './pages/homePage/HomePage';
import NavRight from './components/navRight/NavRight';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<div className="app">
				{/* Nav */}
				<Navigation />
				<NavRight />

				<Switch>
					<Route path="/create/:id" children={<PostCreate />} />
					<Route path="/create" children={<PostCreate />} />

					{/* Detail page */}
					<Route path="/detail/:id" children={<PostDetail />} />

					{/* Home page */}
					<Route path="/" component={HomePage} />
				</Switch>

				{/* Footer */}
				<Footer />
			</div>
		</Router>
	);
}

export default App;
