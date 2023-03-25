import { firestore } from './firebase';
import { doc, updateDoc } from 'firebase/firestore';

export const updateUserFirestore = async (uid: string, data: any) => {
  await updateDoc(doc(firestore, 'users', uid), data);
};

export const updateFirestore = async (collection: string, docId: string, data: any) => {
  await updateDoc(doc(firestore, collection, docId), data);
};
