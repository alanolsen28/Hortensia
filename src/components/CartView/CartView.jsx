import React from "react"
import { useContext } from "react"
import { creatBuyOrderFire } from "../../Services/firebase"
import cartContext from "../../storage/CartContext"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { CheckOut } from "../CheckOut/CheckOut";


function CartView() {
   const { cart, totalpriceInCart, clear } = useContext(cartContext)
   const navigate = useNavigate()

   if(cart.length === 0 ) return <p className='text-center title pt-5'>CART VACIO</p>

   function creatBuyOrder() {
    const buyData = {
      buyer: {
        name: "User 1",
        phone: "1165282794",
        email: "alan.olseen@hotmail.com"
      },
      items: cart,
      total: totalpriceInCart(),
      date: new Date(),
    }

    creatBuyOrderFire(buyData).then((orderiD) => {
        clear();
        CheckOut()
        navigate("/checkout/")
        Swal.fire((`Realizaste Tu Compra`),);
      }
    );

    
   }
    
    return ( <div>
              <p className=' '>CART</p>
              <div className='container'>
              <div className='d-flex justify-content-center text-center'> 
          </div>
    {
        cart.map((cartItem) => (
            <div key={cartItem.id}>
   <div className='m-2 center-block' style={{ width: '20rem'}}>
    <Card className='card p-1 text-center colorCrema' style={{ width: '15rem'}}>
      <Card.Img variant="top rounded" src={cartItem.img}/>
      <Card.Body>
        <Card.Title>{cartItem.title}</Card.Title>
        <p>${cartItem.price}</p>
        <Card.Title>{cartItem.cantidad} Unidades</Card.Title>
        {/* <Button onClick={()=>removeItem(cartItem.id)} variant="danger m-2">X</Button> */}
        <Button onClick={clear} variant="danger m-2">Vaciar Carrito</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
        ))}
        <div className="container">
        <div className='justify-content-center text-center'>
        <p className='text-center title2 p-1 mt-3'>TOTAL A PAGAR ${totalpriceInCart()}</p>
        <Button onClick={creatBuyOrder} variant="success m-2 mb-5" >FINALIZAR COMPRAR</Button>
        </div>
        </div>
        </div>
        </div>)}

export default CartView