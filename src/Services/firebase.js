
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
const db = getFirestore(FirebaseApp)

export async function getProductFromAPI(id) {

  try { 
    const docRef = doc(db, "hortensia", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        ...docSnap.data(),
        id: docSnap.id,
      };
    } else {
      throw new Error("El producto no existe");
    }
  }
  catch(error){
    throw error;
  }
}


export async function getProductsFromAPI() {

  try {

    const collectionProducts = collection(db, "hortensia");

    let respuesta = await getDocs(collectionProducts);

    const products = respuesta.docs.map((docu) => {
      return {
        ...docu.data(),
        id: docu.id,
        };
    });

    return products;
    
  } catch (error) {
    console.error(error);
  }
}


export async function getProductFromAPIByCategory(categoryID) {


  const productRef = collection(db,"hortensia")
  const myQuery = query(productRef, where("category", "==", categoryID))

  const productsSnap = await getDocs(myQuery);

  const products = productsSnap.docs.map(docu =>{
  
    return {      
      ...docu.data(),
      id: docu.id,
     }})
     
     return products;
}

export async function creatBuyOrderFire(buyOrderData) {
  const collectionRef = collection(db ,"buyorders")
  const docRef = await addDoc(collectionRef, buyOrderData);
 
  return (docRef.id)


}


export async function exportItemsArray () {
  const items = [
 {

    id : 1,
    title : "Rosa",
    description : "flor de color rosa",
    price: 1.000,
    stock: 50,
    category: "flores",
   img: "/img/rosa.jpg"

},
{

    id : 2,
    title : "Plumeria",
    description : "flor de color rosa",
    price: 2.000,
    stock: 50,
    category: "flores",
     img: "/img/plumeria.jpg",

},
{

    id : 3,
    title : "Ramo Seco",
    description : "./imagenes/sexo.jpg",
    price: 3.000,
    stock: 50,
    category: "ramos",
   img: "/img/seco.jpg",

},
{

    id : 4,
    title : "Ramo Repollo",
    description : "flor de color rosa",
    price: 3.000,
    stock: 50,
    category: "ramos",
   img: "/img/verdu.jpg",

},
{

    id : 6,
    title : "Amarilla",
    description : "flor de color amarilla",
    price: 2.000,
    stock: 50,
    category: "flores",
   img: "/img/amarilla.jpg",

},
{

    id : 7,
    title : "Ramo 2",
    description : "ramo",
    price: 2.000,
    stock: 50,
    category: "ramos",
   img: "/img/ramo1.jpg",

},
{

    id : 8,
    title : "Rosa",
    description : "flor de color rosa",
    price: 1.000,
    stock: 50,
    category: "flores",
   img: "/img/rosa.jpg"

},
{

    id : 9,
    title : "Plumeria",
    description : "flor de color rosa",
    price: 2.000,
    stock: 50,
    category: "flores",
   img: "/img/plumeria.jpg",

},
{

    id : 10,
    title : "Ramo Seco",
    description : "./imagenes/sexo.jpg",
    price: 3.000,
    stock: 50,
    category: "ramos",
   img: "/img/seco.jpg",

},
{

    id : 11,
    title : "Ramo Repollo",
    description : "flor de color rosa",
    price: 3.000,
    stock: 50,
    category: "ramos",
   img: "/img/verdu.jpg",

},
];

const collectionRef = collection(db, "hortensia");

for (let item of items) {
  item.index = item.id;
  delete item.id;
  const docRef = await addDoc(collectionRef, item);
  console.log("Document created with ID", docRef.id);
}}