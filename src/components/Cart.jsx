import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { useCartContext } from './context/CartContext'
import ItemCart from './ItemCart'
import {Link} from 'react-router-dom'
const Cart = () => {
    const {cartList, removeAll, removeFromCart}=useCartContext()
    const calcularTotal=(cartList)=>{
        let precio
        let subTotal=0
        if(cartList!=null) {
            cartList.map(prod=> {
                precio= prod.cantidad*prod.precio
                subTotal= subTotal+precio
            })
            return subTotal
        }
    }
    if(cartList.length==0)
            return(
                <>
                    <h2>El carrito esta vacio</h2>
                    <Link to='/'>
                        <Button>Volver al inicio para agregar productos</Button>
                    </Link>
                </>
            )
    else
    return (
        <>
                <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Producto</td>
                        <td>Marca</td>
                        <td>Modelo</td>
                        <td>Precio</td>
                        <td>Cantidad</td>
                        <td>Precio por X cantidad</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartList.map(prod=><ItemCart removeFromCart={removeFromCart} key={prod.id} prod={prod}/>)
                    }
                <tr>
                    <td >
                        <h2>Total: {calcularTotal(cartList)}</h2>
                    </td>
                </tr>

                
                </tbody>

            </Table>
            <Button onClick={removeAll}>Vaciar carrito</Button>
        </div>
        <Link to='/'>
                <Button>Volver para seguir comprando</Button>
        </Link>
        </>
    )
}

export default Cart
