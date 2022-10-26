import React, { useState } from 'react';

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
        <div>
        <br />
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleAddToCart}>ADD</button>
        </div>
    )
}

export default ClickCounter;