import React, { useState } from 'react'
import cart from '../images/carrito.png'
import {useCartContext} from './context/CartContext'
function CartWidget() {
    const{cartCount}=useCartContext()
    if(cartCount()>0)
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
    else
    return(
        <div className='divVacio'>
        </div>
    )
}

export default CartWidget