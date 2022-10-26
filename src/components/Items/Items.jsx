import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ClickCounter from '../ClickCounter/Clickcounter';


function Items(props) {
  return (
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary" className='buttonComprar'>{props.text}</Button>
        <ClickCounter stock={10}/>
      </Card.Body>
    </Card>
  );
}

export default Items;