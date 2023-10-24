import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { firebaseConfig } from './firebase-config'; 


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
  
    export const addUserData = async () => {

  try {
    const docRef = await addDoc(collection(db, "users"), {
      city: document.getElementById("city"),
      activities: document.getElementById("activities"), 
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}






