import './App.scss';
import Header from './components/header/Header';
import Auth from './components/auth/Auth';
import { AuthProvider } from './components/auth/AuthContext';

function App() {
	return (
		<AuthProvider>
			<div className="app">
				<Header />
				<Auth />
			</div>
		</AuthProvider>
	);
}

export default App;
