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

    return itemFound
}

function clear () {
    setCart([]);

}

function totalitemsInCart() { 
    let totalitemsInCart = [];
    cart.forEach((itemsInCart)  => {
        totalitemsInCart = itemsInCart.cantidad 
         });
    return totalitemsInCart 
}

function totalpriceInCart() { 
    let totalprice = 0;
    cart.forEach((itemsInCart)  => {
        totalprice = itemsInCart.cantidad * itemsInCart.price + totalprice
         });
    return totalprice 
}

function deleteToCart(itemData) {
    let itemFound = cart.find ( item => item.id === itemData.id)

    if (itemFound){
        let newCart = cart.map ( itemsInCart => {
            if (itemsInCart.id === itemData.id)
            { itemsInCart.cantidad -= itemData.cantidad;
                return itemsInCart;
            }
            else {
                return itemsInCart
            }
        })
       setCart(newCart)
    } else  {       
        const newCart = [...cart];
        newCart.shift(itemData)
        setCart(newCart)

    }

    return itemFound
}

const value = {
    cart,
    totalitemsInCart,
    addToCart ,
    clear,
    totalpriceInCart,
    deleteToCart,
};

    return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
    ) ; 
    }

export default cartContext;