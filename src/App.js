import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let title = "Bienvendios";

  return (
    <div className='App'>
    <header className='App-header'>
    <NavBar />
    </header>
    </div>

  );
}
export default App;
