import { createContext, useState } from "react";

const cartContext = createContext();

export function CartContextPorvider(props) {
    const [cart, setCart] = useState([]);


function addToCart(itemData) {
    let itemFound = cart.find ( item => item.id === itemData.id)

    if (itemFound){
        let newCart = cart.map ( itemsInCart => {
            if (itemsInCart.id === itemData.id)
            { itemsInCart.cantidad += itemData.cantidad;
                return itemsInCart;
            }
            else {
                return itemsInCart
            }
        })
       setCart(newCart)
    } else  {       
        const newCart = [...cart];
        newCart.push(itemData)
        setCart(newCart)
    }
}

function totalitemsInCart() { 
}

function totalpriceInCart() { 
    let totalprice = 0;
    cart.forEach((itemsInCart)  => {
        totalprice = (itemsInCart.cantidad * itemsInCart.price) + totalprice
         });
    return totalprice 
}

// function deleteitemsInCart (itemID) {
//  let newCartDelete = cart.filter((itemsDB)  => itemsDB.id !== cart.id)
//     return newCartDelete 
// }

const value = {
    cart,
    totalitemsInCart,
    addToCart ,
    // deleteitemsInCart,
    totalpriceInCart,
};

    return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
    ) ; 
    }

export default cartContext;