import React, { useEffect } from 'react';
import { fetchUserFirestore } from '../api/firebase/fetchFirestore';
import { useAppDispatch } from '../hooks/global';
import { fetchUserArray } from '../store/slices/users/usersService';
import useLogin from '../hooks/useLogin';
import { setLoginData, TUserProfile } from '../store/slices/users/authSlice';

const AppRunner = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { authenticated, user, loading } = useLogin();

  /*
   * After the user logs in we need
   * to store the data to the redux state.
   * This function is called if the user
   * is being logged it behind the scenes
   * via session/token id and the login function
   * is not triggered.
   */
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
      /* After the user logs and in and user object is populated
       * store it in the redux state aswell
       */
      getUserData(user.uid);
    }
  }, [user?.uid]);

  return <React.Fragment />;
};

export default AppRunner;
