import { firestore } from '../../../api/firebase/firebase';
import { setDoc, doc } from 'firebase/firestore';

export const storeUser = async (uid: string, formData: any) => {
  await setDoc(doc(firestore, 'users', uid), formData);
};
