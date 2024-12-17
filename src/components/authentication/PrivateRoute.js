import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (window.location.href.includes('account') || window.location.href.includes('cart')) {
    console.log("khobbeee")
        if (!token) {
            return <Navigate to="/login" />;
        }
    }
    return children;
};

export default PrivateRoute;
