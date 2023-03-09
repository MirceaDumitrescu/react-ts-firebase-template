import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase/firebase"

const handleSubmit = (testdata: any) => {
  const ref = collection(firestore, "test_data") // Firebase creates this automatically

  const data = {
    testData: testdata
  }

  try {
    addDoc(ref, data)
  } catch (err) {
    console.log(err)
  }
}

export default handleSubmit
