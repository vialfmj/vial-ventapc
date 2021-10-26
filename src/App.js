import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting='hola mundo'/>
    <ItemCount initial='1' stock='5'/>
    </ >
  );
}

export default App;
