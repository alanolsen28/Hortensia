import React from 'react'
import "../carrito.css";
import { Link } from 'react-router-dom';

export function CheckOut() {
    return (    
        <div className='text-center title pt-5'> 
        <h1>FINALIZO SU COMPRA</h1>
        <Link to="/" className='btn btn-success buttonComprar m-2 black'>Seguir Comprando</Link> 
        </div>        
   ) }

