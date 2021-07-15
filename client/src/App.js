import './App.scss';
import Header from './components/header/Header';
import NavRight from './components/navRight/NavRight';
import PostSection from './components/postSection/PostSection';
import PostDetail from './pages/PostDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/detail" component={PostDetail} />
					<Route path="/">
						<Header />
						<NavRight />
						<PostSection />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
