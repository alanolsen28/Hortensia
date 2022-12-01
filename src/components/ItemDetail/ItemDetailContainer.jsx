import React, {useState, useEffect} from 'react'
import "../carrito.css";
import Card from 'react-bootstrap/Card';
import ClickCounter from '../ClickCounter/Clickcounter';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import cartContext from '../../Storage/CartContext';
import { useContext } from 'react';
import Loader from '../Loader/Loader';
import { getProductFromAPI } from '../../Services/firebase';




function ItemDetailContainer() {
   const [product, setProduct] = useState([]);
   const [inCart , setInCart] = useState(false)
   const [isLoading , setisLoading] = useState(true)
   const { addToCart} = useContext(cartContext);
   

   let id = useParams().id; 

   useEffect(() => {
      getProductFromAPI(id)
      .then ((itemsdb) => {
        setProduct(itemsdb);
        })
      .catch ((error) => {
          console.error(error);
        })
        .finally( () => 
        setisLoading(false))
    }, [id]);



 function onAddToCart(cantidad) {

  const itemForCart =  {
    ...product, 
    cantidad,
  }
        
  addToCart(itemForCart);

  Swal.fire(
     (`Agregaste ${cantidad} Unidades de ${product.title} al Carrito!`),
    '',
    'success'
  )
     setInCart(true);
 }
 
return ( <>

  {isLoading ? ( 
    <div className='container'>
   <div className='row m-5 d-flex justify-content-center'>
    <Loader></Loader>
    </div>
    </div> ) : (
  <div className='container'>
   <div className='row m-5 d-flex justify-content-center'>
   <div className='col-xs-1 center-block' style={{ width: '20rem'}}>
    <Card className='card p-1 text-center colorCrema' style={{ width: '20rem'}}>
      <Card.Img variant="top rounded"  src={product.img}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <p>${product.price}</p>
        {!inCart ? (
          <ClickCounter stock={product.stock} onAddToCart={onAddToCart}/>
        ) : ( <div>
          <Link to="/cart/">     
              <button className='btn btn-outline-dark buttonComprar m-2'>Ir al Carrito</button>
           </Link> 
           <Link to='/' className='btn btn-outline-dark buttonComprar m-2'>Seguir Comprando</Link> 
              </div>) }
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
 ) };
  </>)
} 

export default ItemDetailContainer;
