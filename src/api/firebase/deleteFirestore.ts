import { firestore } from './firebase';
import { doc, deleteDoc, deleteField, updateDoc } from 'firebase/firestore';

export const deleteUserFirestore = async (uid: string) => {
  await deleteDoc(doc(firestore, 'users', uid));
};

export const deleteFieldsFirestore = async (collection: string, docId: string, field: string) => {
  const docRef = doc(firestore, collection, docId);
  await updateDoc(docRef, { field: deleteField() });
};

export const deleteFirestore = async (collection: string, docId: string) => {
  await deleteDoc(doc(firestore, collection, docId));
};
