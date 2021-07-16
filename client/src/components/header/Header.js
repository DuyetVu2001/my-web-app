import React, { useContext } from 'react';
import './Header.scss';
import Slider from './Slider';
import { NavRightContext } from '../../contexts/NavRightContext';
import { Link } from 'react-router-dom';

const Header = () => {
	// Auth context
	const { showNavRight } = useContext(NavRightContext);

	return (
		<header className="header">
			{/* navigation */}
			<nav className="header__nav">
				<Link to="/">
					<h1 className="header__logo">Duyet Vu</h1>
				</Link>

				<div className="header__list">
					<div className="header__item">
						<Link to="/create">
							<i className="fas fa-folder-plus"></i>
						</Link>
					</div>
					<div className="header__item" onClick={showNavRight}>
						<i className="fas fa-cog"></i>
					</div>
				</div>
			</nav>

			{/* slide show */}
			<Slider />
		</header>
	);
};

export default Header;
