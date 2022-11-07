import React, {useState, useEffect} from 'react'
import "../carrito.css";
import { getProductFromAPI } from  '../../mockService/mockService';
import Card from 'react-bootstrap/Card';
import ClickCounter from '../ClickCounter/Clickcounter';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
   const [product, setProduct] = useState([]);


   let id = useParams().id; 

   useEffect(() => {
      getProductFromAPI(id)
      .then ((itemsDB) => {
        setProduct(itemsDB);
        });
    }, [id]);


return (
  <div className='container'>
   <div className='row m-5'>
    <Card className='card p-1 text-center colorCrema' style={{ width: '80rem'}}>
      <Card.Img variant="top" src={product.img}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <p>${product.price}</p>
        <ClickCounter/>
        <button className="btn btn-outline-dark buttonComprar mb-1">COMPRAR</button>
      </Card.Body>
    </Card>
    </div>
    </div>
  );

} 

export default ItemDetailContainer;
