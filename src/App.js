import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
/* import ItemDetailContainer from './components/ItemDetailContainer' */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import Galeria from './components/Galeria';
import Nosotros from './components/Nosotros';
function App() {
  return (
    <>
      <Router>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/Contacto' element={<Contacto/>} />
          <Route path='/Galeria' element={<Galeria/>} />
          <Route path='/Nosotros' element={<Nosotros/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route exact path='/:categoriaId' element={<ItemListContainer/>}/>
          <Route exact path='/ItemDetailContainer/:itemId' element={<ItemDetailContainer/>}/>
        </Routes>
      </Router>

    
    </ >
  );
}

export default App;
