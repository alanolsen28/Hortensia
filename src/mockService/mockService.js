const itemsDB = [ {

    id : 1,
    title : "Rosa",
    description : "flor de color rosa",
    price: 1000,
    stock: 50,
    category: "flores",
    img: "./img/rosa.jpg"

},
{

    id : 2,
    title : "Plumeria",
    description : "flor de color rosa",
    price: 2000,
    stock: 50,
    category: "flores",
    img: "./img/plumeria.jpg",

},
{

    id : 3,
    title : "Ramo Seco",
    description : "./imagenes/sexo.jpg",
    price: 3000,
    stock: 50,
    category: "ramos",
    img: "./img/seco.jpg",

},
{

    id : 4,
    title : "Ramo Repollo",
    description : "flor de color rosa",
    price: 3000,
    stock: 50,
    category: "ramos",
    img: "./img/verdu.jpg",

},
{

    id : 6,
    title : "Amarilla",
    description : "flor de color amarilla",
    price: 2000,
    stock: 50,
    category: "flores",
    img: "./img/amarilla.jpg",

},
{

    id : 7,
    title : "Ramo 2",
    description : "ramo",
    price: 2000,
    stock: 50,
    category: "ramos",
    img: "./img/ramo1.jpg",

},
{

    id : 8,
    title : "Rosa",
    description : "flor de color rosa",
    price: 1000,
    stock: 50,
    category: "flores",
    img: "./img/rosa.jpg"

},
{

    id : 9,
    title : "Plumeria",
    description : "flor de color rosa",
    price: 2000,
    stock: 50,
    category: "flores",
    img: "./img/plumeria.jpg",

},
{

    id : 10,
    title : "Ramo Seco",
    description : "./imagenes/sexo.jpg",
    price: 3000,
    stock: 50,
    category: "ramos",
    img: "./img/seco.jpg",

},
{

    id : 11,
    title : "Ramo Repollo",
    description : "flor de color rosa",
    price: 3000,
    stock: 50,
    category: "ramos",
    img: "./img/verdu.jpg",

},
];


export default function getProductsFromAPI() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(itemsDB);
        }, 0);
    });
}
  

export  function getProductFromAPI(idParams) {

    return new Promise((resolve) => {
        setTimeout(() => {
        
            let ItemRequested = itemsDB.find(
                (item) => item.id === Number(idParams)
                );

            resolve(ItemRequested);
        }, 10);
    });
}
  

export function getProductFromAPIByCategory(cartegoryid) {

    return new Promise((resolve) => {
        setTimeout(() => {

            let arrayItemRequested = itemsDB.filter ((item) => {
                return item.category === cartegoryid
        }
     );

            resolve (arrayItemRequested)
        }, 100);
    })
}