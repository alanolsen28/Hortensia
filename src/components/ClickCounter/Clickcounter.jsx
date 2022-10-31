import React, { useState } from 'react';
import "../Items/carrito.css";

function ClickCounter({stock}) {
    const [cantidad, setCantidad] = useState(0);

    function handleIncrement() {
        if ( cantidad < stock)
        setCantidad(cantidad +1);        
    }

    function handleDecrement () {
        if ( cantidad > 0)
        setCantidad(cantidad -1);        
    }

    function handleAddToCart() {
        console.log("agregado al carrito");
    }

    return (
        <div className='m-2 p-1'>
            <button onClick={handleIncrement} className="btn btn-outline-dark m-2">+</button>
            <button onClick={handleDecrement} className="btn btn-outline-dark m-2">-</button>
            <p>{cantidad}</p>
            <button onClick={handleAddToCart} className="btn text-light btn-outline-dark buttonComprar">COMPRAR</button>
        </div>
    )
}

export default ClickCounter;