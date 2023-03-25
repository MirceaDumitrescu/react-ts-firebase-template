import { useEffect, useState } from 'react';
import { auth } from '../api/firebase/firebase';
import { TUserProfile } from '../store/slices/users/authSlice';

const useLogin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<TUserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      console.log('user', user);
      if (user) {
        setUser(user);
        setAuthenticated(true);
      } else {
        setUser(null);
        setAuthenticated(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return {
    authenticated,
    user,
    loading
  };
};

export default useLogin;
