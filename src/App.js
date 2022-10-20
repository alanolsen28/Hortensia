import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Items/ItemListContainer';

function App() {
  let title = "Bienvendios";

  return (
    <div className='App'>
      <header ClassName="App-header">
         <NavBar />
      </header>
    <ItemListContainer />
    </div>
  );
}
export default App;

