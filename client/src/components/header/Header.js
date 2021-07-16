import React from 'react';
import { useDispatch } from 'react-redux';
import './Header.scss';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import { showNavRight } from '../../redux/reducers/navRightReducers';

const Header = () => {
	const dispatch = useDispatch();

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
					<div
						className="header__item"
						onClick={() => dispatch(showNavRight())}
					>
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
