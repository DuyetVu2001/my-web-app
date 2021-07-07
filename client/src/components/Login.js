import React from 'react';
import './Login.scss';

const Login = () => {
	return (
		<div className="login">
            <div className="login__color"></div>
            <div className="login__color"></div>

			<div className="login__box">
				<h2 className="login__title">Login Form</h2>
				<form className="login__form">
					<input type="text" className="login__input" placeholder="Username" />
					<input type="password" className="login__input" placeholder="Password" />
					<input type="submit" className="login__input" value="Login" />
				</form>
                <div className="login__forget">
                    <p>Forgot password ? <em>Click here</em></p>
                    <p>Don't have an account ? <em>Sign up</em></p>
                </div>
			</div>
		</div>
	);
};

export default Login;
