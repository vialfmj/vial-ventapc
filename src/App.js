import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting='hola mundo'/>
    </ >
  );
}

export default App;
