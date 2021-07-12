import React, { createContext, useState, useCallback } from 'react';

export const NavRightContext = createContext();

const NavRightProvider = ({ children }) => {
	//@ Handle toggle NavRight
	// NavRight state
	const [toggleNavRight, setNavRight] = useState(false);

	// Show NavRight (set state to true)
	const showNavRight = useCallback(() => setNavRight(true), []);

	// Hide NavRight (set state to false)
	const hideNavRight = useCallback(() => setNavRight(false), []);
	//@ End

	return (
		<NavRightContext.Provider
			value={{
				toggleNavRight,
				hideNavRight,
				showNavRight,
			}}
		>
			{children}
		</NavRightContext.Provider>
	);
};

export default NavRightProvider;
