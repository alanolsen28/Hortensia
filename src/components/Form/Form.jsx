import { useState } from "react";
import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


export function BuyUserForm(props) {

  
const [userData, setUserData] = useState({
  nombre: "",
  telefono: "",
  email: "",
  comentario: "",
  edad: "",
  direccion: "",
})

function onInputChange(evt) {

  const inputName = evt.target.name;
  const value = evt.target.value;

  const newUserData = { ...userData };
  newUserData[inputName] = value;
  setUserData(newUserData);
}

function onSubmit(evt) {
  evt.preventDefault();
  props.onSubmit(userData);
}


 return (
<Form className="form" onSubmit={onSubmit}>

<Form.Group className="mb-3">
  <Form.Control value={userData.name} name="nombre" type="text" placeholder="Nombre/Apellido" onChange={onInputChange}/>
  </Form.Group>

<Form.Group className="mb-3" >
    <Form.Control value={userData.edad} name="edad" type="number" placeholder="Edad" onChange={onInputChange}/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Control value={userData.direccion}  name="direccion"  type="text" placeholder="Direccion" onChange={onInputChange}/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Control value={userData.email}  name="email"   type="email" placeholder="Email" onChange={onInputChange}/>
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Control value={userData.telefono}  name="telefono" type="phone" placeholder="Telefono" onChange={onInputChange}/>
  </Form.Group>

  <InputGroup>
    <InputGroup.Text>Comentarios</InputGroup.Text>
    <Form.Control value={userData.comentarios}  name="comentarios" as="textarea" aria-label="Comentarios" onChange={onInputChange}/>
  </InputGroup>

  <Button variant="success m-1" type="submit" className="mt-3" onClick={onSubmit}>
       FINALIZAR COMPRAR
  </Button>

</Form>

)

}
