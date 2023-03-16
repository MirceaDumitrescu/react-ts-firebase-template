import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks/global';
import { fetchData } from '../store/slices/users/fetchUsers';
const AppRunner = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return <React.Fragment />;
};

export default AppRunner;
