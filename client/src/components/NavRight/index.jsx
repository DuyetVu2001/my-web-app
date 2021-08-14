import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import {
	hideNavRight,
	selectorNavRight,
} from '../../redux/reducers/navRightReducers';

const NavRight = () => {
	// Toggle sign-in/out form
	const [isSignIn, setIsSignIn] = useState(true);
	const toggleSignForm = useCallback(() => {
		setIsSignIn(!isSignIn);
	}, [isSignIn]);

	const navRight = useSelector(selectorNavRight);
	const dispatch = useDispatch();

	return (
		<>
			{navRight ? (
				<>
					{/* Overlay */}
					<div id="overlay" onClick={() => dispatch(hideNavRight())} />
					{/* End overlay */}

					<div className="sign-in">
						<div className="sign-in__color"></div>
						<div className="sign-in__color"></div>

						<div className="sign-in__container">
							<div
								className="sign-in__close"
								onClick={() => dispatch(hideNavRight())}
							>
								<i className="fas fa-times-circle"></i>
							</div>

							{isSignIn ? (
								<SignInForm toggleSignForm={toggleSignForm} />
							) : (
								<SignUpForm toggleSignForm={toggleSignForm} />
							)}
						</div>
					</div>
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default NavRight;
