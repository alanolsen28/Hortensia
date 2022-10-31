import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ClickCounter from '../ClickCounter/Clickcounter';

function Items(props) {
  return (
    <Card className='card m-3 p-1 text-center' style={{ width: '18rem'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <p>${props.price}</p>
        <ClickCounter stock={10}/>
      </Card.Body>
    </Card>
  );
}

export default Items;