import React from 'react'
import Items from "./Items"
import "./carrito.css";


function ItemListContainer() {
  return (
    <div className='carrito'>
    <div>
    <Items title="Producto1" />          
    </div>
    <div>
    <Items title="Producto2" />          
    </div>
    <div>
    <Items title="Producto3" />          
    </div>
    </div>
  )
}

export default ItemListContainer