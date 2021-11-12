import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { useCartContext } from './context/CartContext'
import ItemCart from './ItemCart'
import {Link} from 'react-router-dom'
const Cart = () => {
    const {cartList}=useCartContext()
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
                    </tr>
                </thead>
                <tbody>
                    {
                        cartList.map(prod=><ItemCart key={prod.id} prod={prod}/>)
                    }

                </tbody>
            </Table>
        </div>
        <Link to='/'>
                <Button>Volver para seguir comprando</Button>
        </Link>
        </>
    )
}

export default Cart
