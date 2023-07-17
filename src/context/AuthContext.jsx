import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	const authState = {
		currentUser,
		setCurrentUser
	};

	return (
		<AuthContext.Provider value={authState}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node
};

export const UserAuth = () => useContext(AuthContext);
