import{doc, getDoc} from 'firebase/firestore';
import { firestore } from '../../api/firebase/firebase';

export const fetchUserFirestore = async (uid: string) => {
    const docRef = doc(firestore, 'users', uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null
    }
}