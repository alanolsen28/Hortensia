import React from 'react'
import "./Cartwidget.css";

function Cartwidget(props) {
  return (
    <button className='buttonCart'>       
    <img src='./img/cart.webp' alt="Cart" width="40" height="40" className='imgCart'/>
    </button>
  )
}

export default Cartwidget

console.log(Cartwidget);
