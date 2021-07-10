import React, {useState, useCallback, useContext} from 'react';
import './Auth.scss';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { AuthContext } from '../auth/AuthContext';

const Auth = () => {
	// Auth context
	const {isAuth, setIsAuth} = useContext(AuthContext)
	
	// Toggle sign-in/out form
	const [isSignIn, setIsSignIn] = useState(true);
	
	const toggleSignForm = useCallback(() => {
		setIsSignIn(!isSignIn);
	}, [isSignIn]);

	return (
		<>
			{isAuth ? (
				<>
					{/* Overlay */}
					<div id="overlay" onClick={() => setIsAuth(false)} />
					{/* End overlay */}

					<div className="sign-in">
						<div className="sign-in__color"></div>
						<div className="sign-in__color"></div>

						<div className="sign-in__container">
							<div className="sign-in__close" onClick={() => setIsAuth(false)}>
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

export default Auth;
