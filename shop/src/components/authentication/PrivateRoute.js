import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }

    // Optionally, you can decode the token and check its validity
    // const isValidToken = decodeAndVerifyToken(token); // Implement this function as needed

    return children;
};

export default PrivateRoute;
