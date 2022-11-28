import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import "./home.css";
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartContextPorvider} from './storage/CartContext';
import CartView from './components/CartView/CartView';
import { getProductsFromAPI, getProductFromAPI, getProductFromAPIByCategory } from './Services/firebase';
import { CheckOut } from './components/CheckOut/CheckOut';




function App() {

  getProductsFromAPI()
  getProductFromAPI()
  getProductFromAPIByCategory()
  return (
  <div className='backGround'>
  <CartContextPorvider>
  <BrowserRouter>     
            <NavBar/>
        <Routes>

        <Route 
        path='/' 
        element={ <ItemListContainer/> } />        

        <Route 
        path='/category/:categoryid' 
        element={ <ItemListContainer/> } />        

        <Route 
        path='/detalle/:id' element={ <ItemDetailContainer/> } />

        <Route 
        path='*' 
        element={<h1>404: Ruta no encontrada</h1>} />

        <Route 
        path='/cart/' element={ <CartView/> } />        
       

         <Route 
        path='/checkout/' element={<CheckOut/>}/>

</Routes>
         
  </BrowserRouter>
  </CartContextPorvider>
  </div>
  );
}


export default App;

