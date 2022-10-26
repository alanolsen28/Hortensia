import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Items/ItemListContainer';
import ClickCounter from './components/ClickCounter/Clickcounter';


function App() {
  let title = "Bienvendios";

  return (
    <div className='App containter'>
      <header ClassName="App-header containter">
         <NavBar />
      </header>
    <div className='containter'>
    <ItemListContainer className='containter' />
    </div>
    </div>
  );
}
export default App;

