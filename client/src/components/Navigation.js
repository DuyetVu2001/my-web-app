import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import './Navigation.scss';
import { showNavRight } from '../redux/reducers/navRightReducers';

const Navigation = () => {
	const dispatch = useDispatch();

	// Click to show the NavRight component
	const onSettingClick = () => {
		dispatch(showNavRight());
	};

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
								<p onClick={onSettingClick}>Setting</p>
							</div>

							{/* User (sign in , sign up, admin, comment) */}
							<div className="nav__user">
								<p className="nav__sign-up">Sign Up</p>
								<p className="nav__sign-in">Sign In</p>
							</div>
						</div>
					</Grid>
				</Grid>
			</Container>
		</nav>
	);
};

export default Navigation;
