import FSDB from "../firebase_setup/firebase";
import { collection, getDocs } from "firebase/firestore";



function getSchools(data) {
    const documentIds = data.map((item) => item.id);
    console.log("Document IDs:", documentIds);
    // Additional processing or actions with the document IDs can be performed here
  }
  

const getSchoolsFromFirebase = async () => {
  try {
    const querySnapshot = await getDocs(collection(FSDB, "Universities"));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    getSchools(data);
    console.log("Schools:", data); // Print the schools data
  } catch (error) {
    console.log("Error getting documents: ", error);
  }
};
