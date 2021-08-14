import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInFormSubmit } from '../../../redux/reducers/authReducers';

const SignInForm = ({ toggleSignForm }) => {
	const dispatch = useDispatch();

	//@ Handle sign in state
	// Username and password state
	const [signInData, setSignInData] = useState({
		username: '',
		password: '',
	});

	// Destructing from state
	const { username, password } = signInData;

	// Change state when user is entering input
	const onChangeInput = (e) => {
		setSignInData({
			...signInData,
			[e.target.name]: e.target.value,
		});
	};
	//@ End

	// Send sign in data to server when form submit
	const signIn = (e) => {
		e.preventDefault();

		// Send data to server
		dispatch(signInFormSubmit(signInData));

		// Reset value input after submit
		setSignInData({
			username: '',
			password: '',
		});
	};

	return (
		<div className="sign-in__box">
			<h2 className="sign-in__title">sign-in Form</h2>
			<form className="sign-in__form" onSubmit={signIn}>
				<input
					required
					type="text"
					className="sign-in__input"
					placeholder="Username"
					name="username"
					value={username}
					onChange={onChangeInput}
				/>
				<input
					required
					type="password"
					className="sign-in__input"
					placeholder="Password"
					name="password"
					value={password}
					onChange={onChangeInput}
				/>
				<input type="submit" className="sign-in__input" value="Sign In" />
			</form>
			<div className="sign-in__forget">
				<p>
					Forgot password ? <em>Click here</em>
				</p>
				<p>
					Don't have an account ?{' '}
					<em onClick={() => toggleSignForm()}>Sign up</em>
				</p>
			</div>
		</div>
	);
};

export default SignInForm;
