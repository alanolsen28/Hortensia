import React, { useState } from 'react';
// import  getProductsFromAPI  from '../../mockService/mockService';
import "../carrito.css";

function ClickCounter({stock}) {
    const [cantidad, setCantidad] = useState(0);

    // useEffect(() => {
    //     getProductsFromAPI().then ((itemsDB)=>{
    //         setCantidad(itemsDB);
    //       });
    //   }, []);

    function handleIncrement() {
        if ( cantidad < stock)
        setCantidad(cantidad +1);        
    }

    function handleDecrement () {
        if ( cantidad > 0)
        setCantidad(cantidad -1);        
    }

    return (
        <div className='m-2 p-1'>
            <button onClick={handleIncrement} className="btn btn-outline-dark m-2">+</button>
            <button onClick={handleDecrement} className="btn btn-outline-dark m-2">-</button>
            <p>Cantidad {cantidad}</p>
        </div>
    )
}

export default ClickCounter;