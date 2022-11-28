
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, doc, getDoc, collection, query, where, addDoc } from "firebase/firestore";

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

export async function getProductFromAPI(id) {

  const docRef = doc(DB, "hortensia", id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
       return {
        ...docSnap.data(),
        id: docSnap.id,
       } 
  } else {
    console.error("el producto no existe");
  }
  }

export async function getProductsFromAPI() {

  try {

  const collectionProducts = collection(DB, "hortensia")
  let respuesta = await getDocs(collectionProducts)

 const products = respuesta.docs.map( docu => {
  
  return {
    
    ...docu.data(),
    id: docu.id,

   }} )

   return products;
}
   catch(erorr) {}
   
} 
export async function getProductFromAPIByCategory(categoryID) {


  const productRef = collection(DB,"hortensia")
  const myQuery = query(productRef, where("category", "==", categoryID))

  const productsSnap = await getDocs(myQuery);

  const products = productsSnap.docs.map( docu => {
  
    return {      
      ...docu.data(),
      id: docu.id,
     }})
     
     return products;
}

export async function creatBuyOrderFire(buyOrderData) {
  const collectionRef = collection(DB ,"buyorders")
  const docRef = await addDoc(collectionRef, buyOrderData);
 
  return (docRef.id)


}