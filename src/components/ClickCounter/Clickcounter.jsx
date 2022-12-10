import React, { useState } from 'react';
import "../carrito.css";

function ClickCounter({stock , onAddToCart}) {
    const [cantidad, setCantidad] = useState(1);

 function onAdd(event) {
    if (cantidad < stock) setCantidad (cantidad + 1);    
 }

function handleDecrement (event) {
        if (cantidad > 0)  setCantidad(cantidad -1); 
               
    }

    return (
        <div>
            <button onClick={onAdd} className="btn btn-outline-dark m-2 p-3">+</button>
            <button onClick={handleDecrement} className="btn btn-outline-dark m-2 p-3">-</button>
            <p>{cantidad}</p>
            <button onClick={()=> onAddToCart(cantidad)} className="btn btn-outline-dark buttonComprar mb-1 ">AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ClickCounter;