import Logo from '../images/logo.png';
import Carrito from '../images/carrito.png'
import {Nav, Button} from 'react-bootstrap' 
import {Link} from 'react-router-dom';
import App from '../App';
import CartWidget from './CartWidget';

const Navbar = () =>{

        return(
            <>

            <Nav>
                <div className="navBar">
                    <div className='logo'>
                        <Link to='/' element={<App/>}>
                            <img src={Logo} alt="imagen del logo de la empresa" />
                        </Link>
                    </div>
                    <div>
                        <Link to='/Contacto'>
                            <Button variant='primary'>Contacto</Button>
                        </Link>
                        <Link to='/Galeria'>
                            <Button variant='primary'>Galeria</Button>
                        </Link>
                        <Link to='/Nosotros'>
                            <Button variant='primary'>Nosotros</Button>
                        </Link>
                    </div>
                </div>
                <div className='contenedorCarrito'>
                    <Link to='/Cart'>
                        <CartWidget />
                    </Link>
                </div>

            </Nav>
            </>
        )
}
export default Navbar 