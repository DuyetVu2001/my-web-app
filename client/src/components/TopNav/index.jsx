import { Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	selectorIsAuthenticated,
	signOutAuth,
} from '../../redux/reducers/authReducers';
import { showNavRight } from '../../redux/reducers/navRightReducers';
import './style.scss';

const TopNav = () => {
	const dispatch = useDispatch();

	const isAuthenticated = useSelector(selectorIsAuthenticated);

	return (
		<nav className="nav">
			<Container>
				<Grid container>
					<Grid item sx={12} md={12}>
						<div className="nav__container">
							{/* Logo */}
							<h1 className="nav__logo">
								<Link to={'/'}>DuyetVu</Link>
							</h1>

							{/* Routers */}
							<div className="nav__routes">
								<p>
									<Link to={'/'}>Home</Link>
								</p>
								<p>
									<Link to={'/create'}>Create</Link>
								</p>
								<p>About</p>
								<p>Setting</p>
							</div>

							{/* User (sign in , sign up, admin, comment) */}
							{isAuthenticated ? (
								<div className="nav__user">
									<p
										className="nav__sign-in"
										onClick={() => dispatch(signOutAuth())}
									>
										Sign Out
									</p>
								</div>
							) : (
								<div className="nav__user">
									<p
										className="nav__sign-up"
										onClick={() => dispatch(showNavRight())}
									>
										Sign Up
									</p>
									<p
										className="nav__sign-in"
										onClick={() => dispatch(showNavRight())}
									>
										Sign In
									</p>
								</div>
							)}
						</div>
					</Grid>
				</Grid>
			</Container>
		</nav>
	);
};

export default TopNav;
