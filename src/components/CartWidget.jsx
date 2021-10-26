import React from 'react'
import cart from '../images/carrito.png'

function CartWidget() {
    return (
        <div className='contenedorCarrito'>
            <img src={cart} alt="'imagen de un carrito de compras'" />
        </div>
    )
}

export default CartWidget