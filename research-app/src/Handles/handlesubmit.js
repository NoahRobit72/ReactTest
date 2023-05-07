import { addDoc, collection, doc, getDocs, setDoc } from "@firebase/firestore";
import { FSDB } from "../firebase_setup/firebase";

const handleSubmit = async (Review, college_name, Name, Position, Professor) => {
  // Check if college_name is a valid string
  if (typeof college_name !== "string" || college_name.length === 0) {
    console.log("Invalid college name.");
    return;
  }

  // Check if lab_name is a valid string
  if (typeof Name !== "string" || Name.length === 0) {
    console.log("Invalid lab name.");
    return;
  }

  // Check if the collection exists
  const querySnapshot = await getDocs(collection(FSDB, college_name));
  if (querySnapshot.size === 0) {
    // Collection doesn't exist, create a new one
    await setDoc(doc(FSDB, college_name, Name), { Review, Name, Position, Professor });
  } else {
    // Collection exists, add a new document to it
    await addDoc(collection(FSDB, college_name), {
      Name,
      Review,
      Position,
      Professor
    });
  }
};

export default handleSubmit;