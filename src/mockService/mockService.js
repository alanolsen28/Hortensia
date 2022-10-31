
export default function getProductsFromAPI() {
    const itemsDB = [ {

        id : 1,
        title : "Rosa",
        description : "flor de color rosa",
        price: 1000,
        stock: 50,
        category: "flores raras",
        imgsrc: "...",
    
    },
    {
    
        id : 2,
        title : "Plumeria",
        description : "flor de color rosa",
        price: 2000,
        stock: 50,
        category: "flores raras",
        imgsrc: "...",
    
    },
    {
    
        id : 3,
        title : "rosa",
        description : "flor de color rosa",
        price: 3000,
        stock: 50,
        category: "flores raras",
        imgsrc: "...",
    
    },
    {
    
        id : 4,
        title : "rosa",
        description : "flor de color rosa",
        price: 3000,
        stock: 50,
        category: "flores raras",
        imgsrc: "...",
    
    },
    {
    
        id : 2,
        title : "Plumeria",
        description : "flor de color rosa",
        price: 2000,
        stock: 50,
        category: "flores raras",
        imgsrc: "...",
    
    },
    {
    
        id : 2,
        title : "Plumeria",
        description : "flor de color rosa",
        price: 2000,
        stock: 50,
        category: "flores raras",
        imgsrc: "...",
    
    },
    ];
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(itemsDB);
        }, 1000);
    });
}
  
