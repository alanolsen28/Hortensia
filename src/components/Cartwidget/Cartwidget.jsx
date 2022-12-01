import React, { useContext } from "react";
import "./Cartwidget.css";
import cartContext from '../../Storage/CartContext';
import { Link } from 'react-router-dom';

function Cartwidget() {

  const { totalitemsInCart } = useContext(cartContext);

  return (
    <div className="d-flex">
    <div className='buttonCart m-1'>   
    <Link to="/cart/">     
    <img src='/img/cart.webp' alt="Cart" width="40" height="40" className='imgCart'/>
    </Link>
     </div>
    { 
      (totalitemsInCart() > 0)? totalitemsInCart()
    :
         <></>      
    }
    </div>
  )
}


 
export default Cartwidget
