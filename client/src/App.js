import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import NavRight from './components/navRight/NavRight';
import HomePage from './pages/homePage/HomePage';
import PostDetailPage from './pages/postDetailPage/PostDetailPage';
import PostCreatePage from './pages/postCreatePage/PostCreatePage';

function App() {
	return (
		<Router>
			<div className="app">
				{/* Nav */}
				<Navigation />
				<NavRight />
				<Switch>
					{/* Create, update pages */}
					<Route path="/update/:id" exact component={PostCreatePage} />
					<Route path="/create" exact component={PostCreatePage} />

					{/* Detail page */}
					<Route path="/detail/:id">
						<PostDetailPage />
					</Route>

					{/* Home page */}
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
				{/* Footer */}
				<Footer />
			</div>
		</Router>
	);
}

export default App;
