import React, {useState, useEffect} from 'react'
import Items from "./Items"
import "./carrito.css";
import getProductsFromAPI from '../../mockService/mockService';


function ItemListContainer() {
   const [productsList, setProductsList] = useState([]);

   useEffect(() => {
      getProductsFromAPI().then ((itemsDB)=>{
         setProductsList(itemsDB);
        });
    }, []);

  return (
    <div className='container p-3'>
    <div className='row'>
      {
        productsList.map( (p) => (
          <Items
           title={p.title}
           price={p.price}
           id={p.id}
           description={p.description}
           stock={p.stock}
          />
        ))
      }
    </div>
    </div>
  )
}

export default ItemListContainer