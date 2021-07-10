import React, {useContext} from 'react';
import './Header.scss';
import Slider from './Slider';
import { AuthContext } from '../auth/AuthContext';

const Header = () => {
	// Auth context
	const { setIsNotAuth } = useContext(AuthContext);

	return (
		<header className="header">
			{/* navigation */}
			<nav className="header__nav">
				<h1 className="header__logo">Duyet Vu</h1>

				<div className="header__list">
					<div className="header__item" onClick={setIsNotAuth}>
						<i class="fas fa-cog"></i>
					</div>
				</div>
			</nav>

			{/* slide show */}
			<Slider />
		</header>
	);
};

export default Header;
