import React from 'react';
import { Navigate } from 'react-router-dom';
import { RedirectProps } from '../../TypeProps/TypeProps';

const RedirectComponent: React.FC<RedirectProps> = ({ children }) => {
	const token = localStorage.getItem("token");

	if (!token) {
		return <Navigate to='/login' />
	} 
	return (
		<>
			{children}
		</>
	);
};

export default RedirectComponent;