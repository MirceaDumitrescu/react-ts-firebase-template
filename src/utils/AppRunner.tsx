import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks/global';
import { fetchUserArray } from '../store/slices/users/usersService';

const AppRunner = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserArray());
  }, []);

  return <React.Fragment />;
};

export default AppRunner;
