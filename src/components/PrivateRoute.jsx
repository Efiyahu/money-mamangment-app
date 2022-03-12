import { getAuth } from 'firebase/auth';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';

const PrivateRoute = () => {
  const { loggedIn, loading } = useAuthStatus();
  const auth = getAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return !loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={`/profile/${auth.currentUser.uid && auth.currentUser.uid}`} />
  );
};

export default PrivateRoute;
