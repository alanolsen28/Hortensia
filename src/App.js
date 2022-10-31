import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Items/ItemListContainer';
import "./home.css";


function App() {
  let title = "Bienvendios";

  return (
    <div className='container-fluid backGround'>
      <header className='row'>
         <NavBar/>
      </header>
    <div  className='container-fluid p-5'>
         <ItemListContainer />
    </div>
    </div>
  );
}
export default App;

