import React from 'react';
import Card from 'react-bootstrap/Card';
import "../carrito.css";
import { Link } from 'react-router-dom';

function Items(props) {

  let urlDetail = `/detalle/${props.id}`

  return (
    <Card className='card m-3 p-1 text-center colorCrema' style={{ width: '14rem'}}>
      <Card.Img variant="top rounded"  src={props.img}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <p>${props.price}</p>
        <Link to={urlDetail} className="btn btn-outline-dark buttonComprar">DETALLE</Link>
      </Card.Body>      
    </Card>
  );
}

export default Items;

