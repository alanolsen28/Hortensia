import React , { useContext  } from "react"
import { creatBuyOrderFire } from "../../Services/firebase"
import cartContext from "../../Storage/CartContext"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { CheckOut } from "../CheckOut/CheckOut";
import { BuyUserForm } from "../Form/Form";


function CartView() {
   const { cart, totalpriceInCart, clear, deleteToCart} = useContext(cartContext)
   const navigate = useNavigate()

   if(cart.length === 0 ) return <p className='text-center title pt-5'>CARRITO VACIO</p>


   function createBuyOrder(userData) {

    const buyData = {
      buyer: userData,
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
              <p className='title text-center mt-5'>CART</p>
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
        <Button onClick={deleteToCart} variant="danger m-2">Borrar del Carrito</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
        ))}
        <div className="container">
        <div className='justify-content-center text-center row'>
        <Button onClick={clear} variant="danger mt-5 mb-3">VACIAR CARRITO</Button>        
        <p className='text-center title2'>TOTAL A PAGAR ${totalpriceInCart()}</p>
           
        <BuyUserForm onSubmit={createBuyOrder}/>

        </div>
        </div>
        </div>
        </div>)}

export default CartView