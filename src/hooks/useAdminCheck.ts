import { useEffect, useState } from 'react';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

const useAdminCheck = () => {
  const { loginData } = useSelector((state: RootState) => state.user);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loginData.role !== 'admin') {
      setIsAdmin(false);
      setLoading(false);
      return;
    }
    setIsAdmin(true);
    setLoading(false);
  }, [loginData.uid, loginData.role]);

  return [isAdmin, loading];
};

export default useAdminCheck;
