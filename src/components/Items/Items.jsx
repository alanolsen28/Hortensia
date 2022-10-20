import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Items(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">{props.title}</Button>
      </Card.Body>
    </Card>
  );
}

export default Items;