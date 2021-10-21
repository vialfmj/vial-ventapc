import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap' 
import CartWidget from './CartWidget';

const Navbar = () =>{

        return(
            <div className='navBar'>
            <img src={logo} className='App-logo' />
            <div className='navBarContenedorItms'>
               <Nav.Link href="#home">Inicio</Nav.Link>
               <Nav.Link href="#products">Productos</Nav.Link>
               <Nav.Link href="#contact">Contacto</Nav.Link>
               </div>
               <CartWidget />
            </div>
        )
}
export default Navbar 