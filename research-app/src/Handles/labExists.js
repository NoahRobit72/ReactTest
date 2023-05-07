import { collection, getDocs } from "@firebase/firestore";
import { FSDB } from "../firebase_setup/firebase";

export async function LabExists(collegeName, labName) {
  const labRef = collection(FSDB, collegeName).doc(labName);
  const labSnapshot = await getDocs(labRef);
  return labSnapshot.exists();
}

export default LabExists;
