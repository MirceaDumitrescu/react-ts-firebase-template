import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import useAdminCheck from '../../hooks/useAdminCheck';

type ProtectedProps = {
  component: React.FC;
};

const Protected: React.FC<ProtectedProps> = ({ component: Component, ...routeProps }) => {
  const [loading, isAdmin] = useAdminCheck();

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return <Fragment>{loading === false ? <Component {...routeProps} /> : null}</Fragment>;
};

export default Protected;
