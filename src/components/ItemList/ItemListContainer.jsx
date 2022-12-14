import React, {useState, useEffect} from 'react'
import Items from "../Items/Items"
import "../carrito.css";

import {useParams} from "react-router-dom";
import { getProductsFromAPI, getProductFromAPIByCategory} from '../../Services/firebase';



function ItemListContainer() { 
   const [productsList, setProductsList] = useState([]);
   const { categoryid } = useParams();

   useEffect(() => {
    if (categoryid) {
      getProductFromAPIByCategory(categoryid).then((itemsdb) => {
        setProductsList(itemsdb);
      });
    } else {
      getProductsFromAPI().then ((itemsdb)=>{
        setProductsList(itemsdb);
    });
     }

      }, [categoryid]);



  return (
    <div>
    <div className='container' >
    <div className='row justify-content-center'>
    <p className='text-center title pt-5'>PRODUCTOS</p>
      {
        productsList.map( (p) => (
          <Items            key={p.id}
                            img={p.img}
                            title={p.title}
                            price={p.price}
                            id={p.id}
                            description={p.description}
                            stock={p.stock}
                            categoryid={p.categoryid}
          />
        ))
      }
    </div>
    </div>
    </div>
  )
}



export default ItemListContainer

