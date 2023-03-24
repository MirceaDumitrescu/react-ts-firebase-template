import { firestore as db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

export const writeUserInFirestore = async (uid: string, data: any) => {
  await setDoc(doc(db, 'users', uid), data);
};
