import React from 'react'
import cart from '../images/carrito.png'

function CartWidget() {
    return (
        <div className='contenedorCarrito'>
            <img src={cart} />
        </div>
    )
}

export default CartWidget