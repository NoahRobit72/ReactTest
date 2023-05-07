import { addDoc, collection, doc, getDocs, setDoc } from "@firebase/firestore";
import { FSDB } from "../firebase_setup/firebase";

const handleSubmit = async (test_data, college_name, lab_name) => {
  // Check if college_name is a valid string
  if (typeof college_name !== "string" || college_name.length === 0) {
    console.log("Invalid college name.");
    return;
  }

  // Check if lab_name is a valid string
  if (typeof lab_name !== "string" || lab_name.length === 0) {
    console.log("Invalid lab name.");
    return;
  }

  // Check if the collection exists
  const querySnapshot = await getDocs(collection(FSDB, college_name));
  if (querySnapshot.size === 0) {
    // Collection doesn't exist, create a new one
    await setDoc(doc(FSDB, college_name, lab_name), { test_data });
  } else {
    // Collection exists, add a new document to it
    await addDoc(collection(FSDB, college_name), {
      lab_name,
      test_data,
    });
  }
};

export default handleSubmit;
