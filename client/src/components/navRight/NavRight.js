import React, { useState, useCallback, useContext } from 'react';
import './NavRight.scss';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { NavRightContext } from '../../contexts/NavRightContext';

const NavRight = () => {
	// NavRight context
	const { toggleNavRight, hideNavRight } = useContext(NavRightContext);

	// Toggle sign-in/out form
	const [isSignIn, setIsSignIn] = useState(true);
	const toggleSignForm = useCallback(() => {
		setIsSignIn(!isSignIn);
	}, [isSignIn]);

	return (
		<>
			{toggleNavRight ? (
				<>
					{/* Overlay */}
					<div id="overlay" onClick={() => hideNavRight(false)} />
					{/* End overlay */}

					<div className="sign-in">
						<div className="sign-in__color"></div>
						<div className="sign-in__color"></div>

						<div className="sign-in__container">
							<div
								className="sign-in__close"
								onClick={() => hideNavRight(false)}
							>
								<i class="fas fa-times-circle"></i>
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
