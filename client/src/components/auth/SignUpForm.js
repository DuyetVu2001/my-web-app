const SignUpForm = ({ toggleSignForm }) => {
	return (
		<div className="sign-in__box">
			<h2 className="sign-in__title">sign-up Form</h2>
			<form className="sign-in__form">
				<input type="text" className="sign-in__input" placeholder="Username" />
				<input
					type="password"
					className="sign-in__input"
					placeholder="Password"
				/>
				<input
					type="password"
					className="sign-in__input"
					placeholder="Confirm password"
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
