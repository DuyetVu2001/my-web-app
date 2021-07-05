import React from 'react';
import './Header.scss';
import Slider from '../components/Slider';

const Header = () => {
	return (
		<header className="header">
			{/* navigation */}
			<nav className="header__nav">
				<h1 className="header__logo">Duyet Vu</h1>

				<div className="header__list">
					<div className="header__icon">
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
