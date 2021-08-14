import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import TopNav from './components/TopNav';
import NavRight from './components/NavRight';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import PostCreate from './pages/PostCreate';

function App() {
	return (
		<Router>
			<div className="app">
				{/* Nav */}
				<TopNav />
				<NavRight />
				<Switch>
					{/* Create, update pages */}
					<Route path="/update/:id" exact component={PostCreate} />
					<Route path="/create" exact component={PostCreate} />

					{/* Detail page */}
					<Route path="/detail/:id">
						<PostDetail />
					</Route>

					{/* Home page */}
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				{/* Footer */}
				<Footer />
			</div>
		</Router>
	);
}

export default App;
