import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

export class AuthProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuth: false,
		};

		this.setIsAuth = this.setIsAuth.bind(this);
		this.setIsNotAuth = this.setIsNotAuth.bind(this);
	}

	setIsAuth() {
		this.setState((state) => ({
			isAuth: false,
		}));
	}

	setIsNotAuth() {
		this.setState((state) => ({
			isAuth: true,
		}));
	}

	render() {
		return (
			<AuthContext.Provider
				value={{
					isAuth: this.state.isAuth,
					setIsAuth: this.setIsAuth,
					setIsNotAuth: this.setIsNotAuth,
				}}
			>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}
