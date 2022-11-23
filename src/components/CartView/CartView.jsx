import React from "react"
import { useContext } from "react"
import cartContext from "../../storage/CartContext"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function CartView() {
   const { cart, removeItem, totalpriceInCart, deleteitemsInCart } = useContext(cartContext)

   if(cart.length === 0 ) return <p className='text-center title pt-5'>CART VACIO</p>
 
    return ( <div>
              <p className='text-center title pt-5'>CART</p>
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
        <Button onClick={()=>removeItem(cartItem.id)} variant="danger m-2">X</Button>
        <Button onClick={()=>deleteitemsInCart(cart)} variant="danger m-2">Vaciar Carrito</Button>{' '}
      </Card.Body>
    </Card>
    </div>
    </div>
        ))}
        <p className='text-center title pt-5'>TOTAL A PAGAR ${totalpriceInCart()}</p>
        </div>
        </div>)}

export default CartView