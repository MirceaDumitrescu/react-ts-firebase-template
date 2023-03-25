import { firestore as db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { TUserProfile } from '../../store/slices/users/authSlice';
import { fetchUserFirestore } from './fetchFirestore';

export const writeUserInFirestore = async (uid: string, data: TUserProfile) => {
  const user = await fetchUserFirestore(uid);
  if (user?.uid) {
    return;
  }
  await setDoc(doc(db, 'users', uid), data);
};
