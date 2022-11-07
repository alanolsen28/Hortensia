import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import "./home.css";
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
  <div className='backGround'>
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
        
         </Routes>
  </BrowserRouter>
  </div>
  );
}
export default App;

