
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBIkF4NxHiPZ-oCGo8v3CRZPhPSXzHTVxM",
  authDomain: "hortensia-52d19.firebaseapp.com",
  projectId: "hortensia-52d19",
  storageBucket: "hortensia-52d19.appspot.com",
  messagingSenderId: "462298452982",
  appId: "1:462298452982:web:83b37fb35b1513dd366dd7"
};



const FirebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(FirebaseApp)

export function testdatebase() {
    console.log(FirebaseApp);
}

export async function getProductsFromAPI() {

  const collectionProducts = collection(DB, "hortensia")
  let respuesta = await getDocs(collectionProducts)
 console.log(respuesta.docs[0].data);
 
}