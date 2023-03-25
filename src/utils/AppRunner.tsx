import React, { useEffect } from 'react';
import { fetchUserFirestore } from '../api/firebase/fetchFirestore';
import { useAppDispatch } from '../hooks/global';
import { fetchUserArray } from '../store/slices/users/usersService';
import useLogin from '../hooks/useLogin';
import { setLoginData, TUserProfile } from '../store/slices/users/authSlice';

const AppRunner = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { authenticated, user, loading } = useLogin();

  const getUserData = async (uid: string) => {
    const userProfile = await fetchUserFirestore(uid);
    if (userProfile) {
      dispatch(
        setLoginData({
          loginData: userProfile as TUserProfile,
          isLoggedIn: authenticated,
          isLoading: loading
        })
      );
    }
  };

  useEffect(() => {
    dispatch(fetchUserArray());
    if (user?.uid) {
      getUserData(user.uid);
    }
  }, [user?.uid]);

  return <React.Fragment />;
};

export default AppRunner;
