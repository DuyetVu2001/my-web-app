import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const SignUpForm = ({ toggleSignForm }) => {
	// useContext to get function handle
	const { signUpFormSubmit } = useContext(AuthContext);

	//@ Handle sign in state
	// Username and password state
	const [signUpData, setSignUpData] = useState({
		username: '',
		password: '',
		confirm_password: '',
	});

	// Destructing from state
	const { username, password, confirm_password } = signUpData;

	// Change state when user is entering input
	const onChangeInput = (e) => {
		setSignUpData({
			...signUpData,
			[e.target.name]: e.target.value,
		});
	};
	//@ End

	// Send sign up data to server when form submit
	const signUp = (e) => {
		e.preventDefault();

		// Verify password
		if (password !== confirm_password) {
			return alert('Password and confirm password are different!');
		}

		// Send data to server
		signUpFormSubmit(signUpData);

		// Reset value input after submit
		setSignUpData({
			username: '',
			password: '',
			confirm_password: '',
		});
	};

	return (
		<div className="sign-in__box">
			<h2 className="sign-in__title">sign-up Form</h2>
			<form className="sign-in__form" onSubmit={signUp}>
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
				<input
					required
					type="password"
					className="sign-in__input"
					placeholder="Confirm password"
					name="confirm_password"
					value={confirm_password}
					onChange={onChangeInput}
				/>
				<input type="submit" className="sign-in__input" value="Sign Up" />
			</form>
			<div className="sign-in__forget">
				<p>
					Already have an account ?{' '}
					<em onClick={() => toggleSignForm()}>Sign in</em>
				</p>
			</div>
		</div>
	);
};

export default SignUpForm;
