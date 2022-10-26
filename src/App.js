import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Items/ItemListContainer';
import ClickCounter from './components/ClickCounter/Clickcounter';


function App() {
  let title = "Bienvendios";

  return (
    <div className='App'>
      <header ClassName="App-header">
         <NavBar />
      </header>
    <div className=''>
    <ItemListContainer />
    </div>
    </div>
  );
}
export default App;

