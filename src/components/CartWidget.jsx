import cart from '../images/carrito.png'
import {useCartContext} from './context/CartContext'
function CartWidget() {
    const{cartCount}=useCartContext()
    return (
        <>
        
        <div className='contenedorCarrito'>
            <img src={cart} alt="'imagen de un carrito de compras'" />
        <div>
            <p>{cartCount()}</p>
        </div>
        </div>

        </>
    )
}

export default CartWidget