const SignInForm = ({ toggleSignForm }) => {
    return (
			<div className="sign-in__box">
				<h2 className="sign-in__title">sign-in Form</h2>
				<form className="sign-in__form">
					<input
						type="text"
						className="sign-in__input"
						placeholder="Username"
					/>
					<input
						type="password"
						className="sign-in__input"
						placeholder="Password"
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
}

export default SignInForm
