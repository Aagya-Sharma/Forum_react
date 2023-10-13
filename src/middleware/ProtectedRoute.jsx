import React from 'react';
import { Navigate } from 'react-router-dom';
import { useForumStore } from '../store';

function ProtectedRoute({ children }) {
  // Check if the user is logged in by accessing the state using useForumStore
  const user = useForumStore((state) => state.loggedIn);

  // If the user is not logged in, redirect them to the home page ('/')
  if (!user) {
    return <Navigate to="/" />;
  }

  // If the user is logged in, render the children (protected content)
  return children;
}

export default ProtectedRoute;
