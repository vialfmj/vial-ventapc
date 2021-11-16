import React, { useContext } from 'react'
import {Button} from 'react-bootstrap'
import { useCartContext } from './context/CartContext'
const ItemCart = ({prod}) => {
    const {removeFromCart}=useCartContext()
    const calcularSubTotal=(prod)=>{
        let subTotal= prod.cantidad*prod.precio
        return subTotal
    }
    return (
        <>
            <tr>
                <td>
                    {prod.categoria}
                </td>
                <td>
                    {prod.marca}
                </td>
                <td>
                    {prod.modelo}
                </td>
                <td>
                    {prod.precio}
                </td>
                <td>
                    {prod.cantidad}
                </td>
                <td >
                    {calcularSubTotal(prod)}
                </td>
                <td>
                     <Button onClick={()=>{
                        removeFromCart(prod.id)
                    }}> X</Button>
                </td>
            </tr>

        </>
    )
}

export default ItemCart
