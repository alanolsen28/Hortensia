import React from 'react'
import Items from "./Items"
import "./carrito.css";


function ItemListContainer() {
  return (
    <div className='carrito'>
    <div>
    <Items title="RAMO CHICO" text="COMPRAR"/>          
    </div>
    <div>
    <Items title="RAMO MEDIANO" text="COMPRAR"/>          
    </div>
    <div>
    <Items title="RAMO GRANDE" text="COMPRAR" />          
    </div>
    </div>
  )
}

export default ItemListContainer